import { Component, Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RootObject } from '../../app/customer/customer.interface'
import { GenerateBillRequest } from "../models/GenerateBillRequest";
import { ItemResponse } from "../models/ItemResponse";
import { AvonService } from '../../app/services/avon.service'
import { BuyerResponse } from '../models/BuyerResponse';
import { GenerateBillResponse } from '../models/GenerateBillResponse';
import { stringify } from '@angular/compiler/src/util';
import { AddToCartRequest } from '../models/AddToCartRequest';
import { AddToCartResponse } from '../models/AddToCartResponse';
import{repDetails} from '../models/repDetails';
@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-customer',
  templateUrl: './representative-buy.component.html',
  styleUrls: ['./representative-buy.component.css']
})
export class RepresentativeBuyComponent implements OnInit {

  //data: any;
  public items: ItemResponse[] = [];
  buyerDetails: BuyerResponse;
  isBillGenerated: Boolean;
  billNo: string;
  buyerId: String;
  bill: string;
  isItemAdded: Boolean;
  item: any;
  qty: Number;
  total: any;
  sum: number;
  public repnames: repDetails[]=[];
  repID:string;
  totalammount:any;
  billamt:any;
  
  generateBillResponse: GenerateBillResponse;
  generateBillRequest: GenerateBillRequest;
  
  addToCartRequest: AddToCartRequest;
  addToCartResponse: AddToCartResponse;
  eventPackagePrice = [];
  constructor(private http: HttpClient, private avonService: AvonService) { }

  ngOnInit() {
    console.log("ng on init called");
    this.avonService.getItems().subscribe(res => {
      this.items = res;
      console.log(this.items);
    })
    console.log("ng on init called rep");
    this.repID="REP1";
    this.avonService.getReps(this.repID).subscribe(res => {
      this.repnames = res;
      console.log(this.repnames);
      console.log("ng on init called repdone");
      
    })
     
    this.isBillGenerated = true;
    this.generateBillRequest = new GenerateBillRequest();
    const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    //console.log("random--", random);
    this.generateBillRequest.billNo = "BA"+random;
    this.generateBillRequest.buyer = "resource:org.avon.loyalty.Buyer#GRR";
    this.generateBillRequest.rep = "resource:org.avon.loyalty.Rep#REP1";

    this.avonService.generateBill(this.generateBillRequest ).subscribe(res => {
      this.billNo = res.billNo;
      console.log("response transaction---", res.transactionId);
    })    
  }
  
  

   /* addToCart(item: any, billData: any) {
      console.log("button clicked");
      let data = {};

      data["$class"] = item.$class
      data["bill"] = billData.bill
      data["item"] = item.itemID
      data["qty"] = 2
      return this.avonService.addToCart(this.addToCartRequest).subscribe(res => {
        console.log("add bill was successfully")
      },
        err => {
          console.log("error")
        });
    }*/


 /*  getBill(item: any){
      let data = {}
      data["$class"] = "org.avon.loyalty.GenerateBill"
      data["billNo"] = "B1"
      data["buyer"] = "resource:org.avon.loyalty.Buyer#GRR"
      data["rep"] = "resource:org.avon.loyalty.Rep#REP1"

      return this.avonService.getBill(data).subscribe(res => {
        this.avonService.generate=res;
        console.log("bill generated successfully");
        this.isBillGenerated = true
        this.Add(item, res)
      },
        error => {
          console.log("error generating bill " + JSON.stringify(error));
        })

      this.avonService.getBill(this.generateBillResponse).subscribe(
        res => {
         
          console.log("--response--");
          console.log(this.generate);
          this.isBillGenerated = true;
        },
        ex => {
          console.log("--Error--");
          console.log(ex);
          
        }
      );
      }*/

 
  addToCart(item, item1) {
    this.addToCartRequest = new AddToCartRequest();
    // const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    //console.log("random--", random);

    console.log("item qty---", item.qty);
    this.addToCartRequest.bill = this.billNo;
    this.addToCartRequest.item = "resource:org.avon.loyalty.Item#ITEM_1";
    this.addToCartRequest.qty = item.qty;

    this.avonService.addToCart(this.addToCartRequest).subscribe(res => {

      this.item = res;
      console.log("button clicked-- res is--", res);
      this.eventPackagePrice.push(item1);
      this.addPrice(this.eventPackagePrice);
      // this.sum = this.sum + item1;
      console.log("item qty---", item1);
    })
  }
  addPrice(Array) {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
      sum += Array[i];
    }
    this.total = sum;
    console.log("Total ....", this.total);
    localStorage.setItem("totalammount", this.total);
    this.billamt = localStorage.getItem("totalammount");
    console.log("item bill ammount once again.....", this.billamt);
  }
}
