import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantComponent } from './plant/plant.component';
import { CreatePlantComponent } from './create-plant/create-plant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePlantComponent } from './update-plant/update-plant.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchedulerListComponent } from './scheduler-list/scheduler-list.component';
import { CreateSchedulerComponent } from './create-scheduler/create-scheduler.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchedulerDetailComponent } from './scheduler-detail/scheduler-detail.component';
import { UpdateSchedulerComponent } from './update-scheduler/update-scheduler.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    CreatePlantComponent,
    UpdatePlantComponent,
    PlantDetailComponent,
    SchedulerListComponent,
    CreateSchedulerComponent,
    SchedulerDetailComponent,
    UpdateSchedulerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
