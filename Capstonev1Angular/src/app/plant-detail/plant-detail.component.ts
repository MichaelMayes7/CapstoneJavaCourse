import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Scheduler } from '../scheduler';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {

  id?: number;
  scheduler?: Scheduler;
  plant?: Plant;
  
  constructor(private plantService: PlantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.plant = new Plant();
    this.plantService.getPlantById(this.id).subscribe(data => {
      this.plant = data;
    })
  }

  goToCreateScheduler() {
    this.router.navigate(['create-scheduler']);
  }

}
