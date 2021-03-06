import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MomentModule } from 'angular2-moment';

import { InMemDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { ExpertsComponent } from './experts/experts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    ExpertsComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    MomentModule,
    InMemoryWebApiModule.forRoot(InMemDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
