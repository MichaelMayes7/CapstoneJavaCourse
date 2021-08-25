import { Component, OnInit } from '@angular/core';
import { Scheduler } from '../scheduler';
import { SchedulerService } from '../scheduler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../plant';

@Component({
  selector: 'app-scheduler-detail',
  templateUrl: './scheduler-detail.component.html',
  styleUrls: ['./scheduler-detail.component.css']
})
export class SchedulerDetailComponent implements OnInit {

  id?: number;
  scheduler?: Scheduler;
  plant?: Plant;

  constructor(private schedulerService: SchedulerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.scheduler = new Scheduler();

    this.schedulerService.getSchedulerById(this.id).subscribe(data => {
      this.scheduler = data;
    })
  }

  goToPlantDetail(id?: number) {
    this.router.navigate(['plant-detail', id]);
  }

  goToSchedulerList() {
    this.router.navigate(['schedulers']);
  }

}
