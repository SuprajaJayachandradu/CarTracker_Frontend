import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { AppComponent } from './app.component';
import { VehicleService } from './vehicle-service/vehicle.service';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleReadingDetailComponent } from './vehicle-reading-detail/vehicle-reading-detail.component';
import {ReadingService} from './reading-service/reading.service';
import { AlertService } from './alert-service/alert.service';
import { MapsComponent } from './maps/maps.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { VehicleAlertlistComponent } from './vehicle-alertlist/vehicle-alertlist.component';
import { Angular2GoogleChartDirective } from './directives/angular2-google-chart.directive';


const appRoutes: Routes = [
  {path: 'graph/:vin', component: LineGraphComponent},
  {path: 'vehicles', component: VehicleListComponent},
  {path: 'alerts', component: AlertListComponent},
  {path: 'readings/maps/:vin', component: MapsComponent},
  {path: 'readings/:vin', component: VehicleReadingDetailComponent},
  {path: 'alerts/:vin', component: VehicleAlertlistComponent},
  {path: 'vehicles/:vin', component: VehicleDetailComponent},
  {path: '', redirectTo: '/vehicles', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    VehicleReadingDetailComponent,
    VehicleAlertlistComponent,
    MapsComponent,
    AlertListComponent,
    GoogleChart,
    LineGraphComponent,
    VehicleAlertlistComponent,
    Angular2GoogleChartDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNJFLaclCZUnht591Sq6TSLTX0NQtf7D0'
    })
  ],
  providers: [VehicleService, ReadingService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
