import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantComponent } from './plant/plant.component';
import { CreatePlantComponent } from './create-plant/create-plant.component';
import { UpdatePlantComponent } from './update-plant/update-plant.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { SchedulerListComponent } from './scheduler-list/scheduler-list.component';
import { CreateSchedulerComponent } from './create-scheduler/create-scheduler.component';
import { SchedulerDetailComponent } from './scheduler-detail/scheduler-detail.component';
import { UpdateSchedulerComponent } from './update-scheduler/update-scheduler.component';


const routes: Routes = [
{path : 'plants', component: PlantComponent},
{path : 'create-plant', component: CreatePlantComponent},
{path : 'update-plant/:id', component: UpdatePlantComponent},
{path : 'plant-detail/:id', component: PlantDetailComponent},
{path : 'schedulers', component: SchedulerListComponent},
{path : 'create-scheduler', component: CreateSchedulerComponent},
{path : 'update-scheduler/:id', component: UpdateSchedulerComponent},
{path : 'scheduler-detail/:id', component: SchedulerDetailComponent},
{path : '', redirectTo: 'plants', pathMatch: 'full'}];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
