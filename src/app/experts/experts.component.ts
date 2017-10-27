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

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 4 ? []
        : this.experts.data.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  formatter = (x: {name: string}) => x.name;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/api/experts').subscribe(data => {
      this.experts = data.json();
    });
  }

}
