import { Component, OnInit } from '@angular/core';
import { Scheduler } from '../scheduler';
import { SchedulerService } from '../scheduler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-update-scheduler',
  templateUrl: './update-scheduler.component.html',
  styleUrls: ['./update-scheduler.component.css']
})
export class UpdateSchedulerComponent implements OnInit {

  id?: number;
  scheduler?: Scheduler = new Scheduler();

  bsValue = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(private schedulerService: SchedulerService,
    private route: ActivatedRoute,
    private router: Router) {
      this.datePickerConfig = Object.assign({}, { showWeekNumber: false,
                                                  dateInputFormat: 'YYYY-MM-DD'})
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.schedulerService.getSchedulerById(this.id).subscribe(data => {
      this.scheduler = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.schedulerService.updateScheduler(this.id, this.scheduler).subscribe(data => {
      this.goToSchedulerDetail(this.id);
    }, error => console.log(error));
  }

  goToSchedulerDetail(id?: number) {
    this.router.navigate(['scheduler-detail', id]);
  }

}
