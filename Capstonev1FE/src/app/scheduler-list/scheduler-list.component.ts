import { Component, OnInit } from '@angular/core';
import { Scheduler } from '../scheduler';
import { SchedulerService } from '../scheduler.service';
import { Plant } from '../plant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduler-list',
  templateUrl: './scheduler-list.component.html',
  styleUrls: ['./scheduler-list.component.css']
})
export class SchedulerListComponent implements OnInit {

  schedulers?: Scheduler[];
  plants?: Plant[];
  constructor(private schedulerService: SchedulerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSchedulers();
  }

  private getSchedulers() {
    this.schedulerService.getSchedulerList().subscribe( data => {
      this.schedulers = data;
      console.log("Scheduler List: ", this.schedulers);
    })
  }

  updateScheduler(id?: number) {
    this.router.navigate(['update-scheduler', id]);
  }

  deleteScheduler(id?: number) {
    this.schedulerService.deleteScheduler(id).subscribe(data => {
      console.log(data);
      this.getSchedulers();
    })
  }

  viewScheduler(id?: number) {
    this.router.navigate(['scheduler-detail', id]);
  }

}
