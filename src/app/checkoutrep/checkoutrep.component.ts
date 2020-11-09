import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvonService } from "../services/avon.service";
import { CheckOutOrderRequest } from '../models/CheckOutOrderRequest';
import { CheckOutOrderResponse } from '../models/CheckOutOrderResponse';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
@Component({
  selector: 'app-checkoutrep',
  templateUrl: './checkoutrep.component.html',
  styleUrls: ['./checkoutrep.component.css']
})
export class CheckoutrepComponent implements OnInit {

  checkOut: any;
  checkOutOrderRequest: CheckOutOrderRequest;
  checkOutOrderResponse: CheckOutOrderResponse;
  item: any;
  billNo: string;
  pointsRedeemed: number;
  check: any;
  point: any;
  billamt:any;
  constructor(private http: HttpClient,private avonService: AvonService) { }

  ngOnInit() { 
  
    
    this.billamt = localStorage.getItem("totalammount");
    console.log("item bill ammount once again.....", this.billamt);
  }

    
  

checkoutbill(item)
{
  
  this.checkOutOrderRequest = new CheckOutOrderRequest();

  this.checkOutOrderRequest.avon = "resource:org.avon.loyalty.AvonStore#AVON"
  this.checkOutOrderRequest.bill = "resource:org.avon.loyalty.Bill#B1";
  this.checkOutOrderRequest.pointsRedeemed = item;

  this.avonService.checkOutOrder(this.checkOutOrderRequest).subscribe(res => {

    // this.pointsRedeemed=res.pointsRedeemed;
    console.log("response transaction---", res);
  })
} 

}
