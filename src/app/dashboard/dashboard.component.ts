import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }
  barChartData: Array<Array<any>>;
  geoCharttData: Array<Array<any>>;
  myColumnNames: Array<string>;
  myHeight: number;
  myWidth: number;
  barChartOptions: object;
  pieChartOptions: object;
  geoChartOptions: object;
  areaChartOptions: object;
  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }
  checkout() {
    
  }
}
