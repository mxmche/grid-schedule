import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public model: any;
  public patients: any;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 3 ? []
        : this.patients.data.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/api/patients').subscribe(data => {
      this.patients = data.json();
    });
  }

}
