import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  public model: any;
  public experts: any;
  public expertsTotal: any;
  public group: any = true;
  public groupBySpec: any;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 4 ? []
        : this.experts.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  formatter = (x: {name: string}) => x.name;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/api/experts').subscribe(data => {
      this.experts = data.json().data;
      this.expertsTotal = data.json().data.length;

      const groupBy = {};

      this.experts.forEach(expert => {
        const key = expert.specialty;

        if (!groupBy.hasOwnProperty(key)) {
          groupBy[key] = [expert];
        } else {
          groupBy[key].push(expert);
        }
      });

      const list = [];

      for (const spec in groupBy) {
        if (groupBy.hasOwnProperty(spec)) {
          list.push({
            name: spec,
            items: groupBy[spec]
          });
        }
      }

      this.groupBySpec = list;
    });
  }

  toggleAll(isSelected: boolean) {
    if (this.group) {
      this.groupBySpec.forEach(spec => {
        spec.selected = isSelected;
        spec.items.forEach(e => {
          e.selected = isSelected;
        });
      });
    } else {
      this.experts.forEach(expert => {
        expert.selected = isSelected;
      });
    }
  }

}
