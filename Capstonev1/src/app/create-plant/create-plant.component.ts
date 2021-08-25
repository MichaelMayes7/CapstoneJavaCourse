import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-plant',
  templateUrl: './create-plant.component.html',
  styleUrls: ['./create-plant.component.css']
})
export class CreatePlantComponent implements OnInit {

  plant: Plant = new Plant();
  
  constructor(private plantService: PlantService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePlant() {
    this.plantService.createPlant(this.plant).subscribe(data => {
      console.log(data);
      this.goToPlantList();
    },
    error => console.log(error));
  }

  goToPlantList() {
    this.router.navigate(['/plants']);
  }

  onSubmit() {
    this.savePlant();
    console.log(this.plant);
  }

}
