import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-plant',
  templateUrl: './update-plant.component.html',
  styleUrls: ['./update-plant.component.css']
})
export class UpdatePlantComponent implements OnInit {

  id?: number;
  plant: Plant = new Plant();
  constructor(private plantService: PlantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.plantService.getPlantById(this.id).subscribe( data => {
      this.plant = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.plantService.updatePlant(this.id, this.plant).subscribe( data => {
      this.goToPlantList();
    }, error => console.log(error));  
  }

  goToPlantList() {
    this.router.navigate(['/plants']);
  }

}
