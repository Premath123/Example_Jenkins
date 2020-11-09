import { Component, OnInit } from '@angular/core';
import { AvonService } from "../services/avon.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buyer-rep',
  templateUrl: './buyer-rep.component.html',
  styleUrls: ['./buyer-rep.component.css']
})
export class BuyerRepComponent implements OnInit {
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
