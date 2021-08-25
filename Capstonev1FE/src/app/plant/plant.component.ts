import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  plants?: Plant[];
  // isWatered?: boolean;
  
  constructor(private plantService: PlantService, private router: Router) { }

  ngOnInit(): void {
    this.getPlants();
  }

  private getPlants() {
    this.plantService.getPlantList().subscribe(data => {
      this.plants = data;
    })
  }

  updatePlant(id?: number) {
    this.router.navigate(['update-plant', id]);
  }

  deletePlant(id?: number) {
    this.plantService.deletePlant(id).subscribe(data => {
      console.log(data);
      this.getPlants();
    })
  }

  viewPlant(id?: number) {
    this.router.navigate(['plant-detail', id]);
  }

  // showIcon(id?: number) {
  //   this.plantService.getPlantById(id).subscribe(data => {
  //     this.isWatered = true;
  //   })
  // }

  // hideIcon(id?: number) {
  //   this.plantService.getPlantById(id).subscribe(data => {
  //     this.isWatered = false;
  //   })
  // }

}
