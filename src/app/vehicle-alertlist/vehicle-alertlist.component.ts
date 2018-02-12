import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../alert-service/alert.service';

@Component({
  selector: 'app-vehicle-alertlist',
  templateUrl: './vehicle-alertlist.component.html',
  styleUrls: ['./vehicle-alertlist.component.css']
})
export class VehicleAlertlistComponent {

  alerts;

  constructor(private route: ActivatedRoute, private alertService: AlertService) {

    this.route.params.subscribe(params => {
      alertService.getAlertsByVin(params.vin)
        .subscribe(alerts => this.alerts = alerts);
    });
  }
}
