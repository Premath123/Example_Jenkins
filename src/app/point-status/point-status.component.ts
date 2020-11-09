import { Component, OnInit } from '@angular/core';
import { AvonService } from "../services/avon.service";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-point-status',
  templateUrl: './point-status.component.html',
  styleUrls: ['./point-status.component.css']
})
export class PointStatusComponent implements OnInit {
data2: any;
  constructor(private http: HttpClient, private avonService: AvonService) { }

  ngOnInit() {
     console.log("ng on init called");
    this.avonService.getPartnerSalesLedger("SL - 1548937214901").subscribe(res => {
      this.data2 = res;
      console.log(this.data2);
    
  })
  }

}
