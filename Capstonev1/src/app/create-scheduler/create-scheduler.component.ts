import { Component, OnInit } from '@angular/core';
import { Scheduler } from '../scheduler';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { SchedulerService } from '../scheduler.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-scheduler',
  templateUrl: './create-scheduler.component.html',
  styleUrls: ['./create-scheduler.component.css']
})
export class CreateSchedulerComponent implements OnInit {

  schedulers: Scheduler[];
  scheduler: Scheduler = new Scheduler();
  plantControl = new FormControl('', Validators.required);

  bsValue = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(private schedulerService: SchedulerService,
    private router: Router) {
      this.datePickerConfig = Object.assign({}, { showWeekNumber: false,
                                                  dateInputFormat: 'YYYY-MM-DD'})
    }

  ngOnInit(): void {
  }

  saveScheduler() {
    this.schedulerService.createScheduler(this.scheduler).subscribe(data => {
      console.log(data);
      this.goToSchedulerList();
    },
    error => console.log(error));
  }

  goToSchedulerList() {
    this.router.navigate(['/schedulers']);
  }

  onSubmit() {
    this.saveScheduler();
    console.log(this.scheduler);
  }

}
