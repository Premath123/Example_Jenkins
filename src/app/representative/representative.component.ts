import { Component, HostListener,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AvonService } from '../../app/services/avon.service'
import { buyerDetails } from '../models/buyerDetails';
import { repDetails } from '../models/repDetails';
import {NgForm} from '@angular/forms';
import { TransferTokenRequest } from '../models/TransferTokenRequest'
import { TransferTokenResponse } from '../models/TransferTokenResponse';
@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.css']
})
export class RepresentativeComponent implements OnInit {
  public names: buyerDetails[] = [];
  public repnames: repDetails[]=[];
  repID:string;
  buyerID:string;
  data: any;
  istokenTransfer: Boolean;
  dataa: any;
  f:any;
  temp:number;
  temp1:any;
  item: any;




transferTokenRequest: TransferTokenRequest;
transferTokenResponse: TransferTokenResponse;
  constructor(private http: HttpClient,private avonService: AvonService) { }
 
  ngOnInit() {   
    
      /*list all buyers.....*/
      /*
     console.log("ng on init called");
      this.avonService.getBuyerD().subscribe(res => {
        this.names= res;
        console.log(this.names);
    })
    */
    
      console.log("ng on init called");
    
      this.avonService.getBuyerD().subscribe(res => {
        this.names= res;
        console.log(this.names);
    })
    console.log("ng on init called rep");
    this.repID="REP1";
    this.avonService.getReps(this.repID).subscribe(res => {
      this.repnames = res;
      console.log(this.repnames);
      console.log("ng on init called repdone");
      console.log(this.temp);
    })

   

  }

  transferToken(name, repnames) 
{
this.transferTokenRequest = new TransferTokenRequest();
// const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
//console.log("random--", random);


this.transferTokenRequest.rep  =  repnames.repID;
this.transferTokenRequest.buyer  =   name.buyerID;
this.transferTokenRequest.points = name.pts;

this.avonService.tokenTransfer(this.transferTokenRequest).subscribe(res => {
//this.item = res;
console.log("button clicked-- res is--", res);

})

} 
}
 



/*
export class CustomerComponent implements OnInit {

  //data: any;
  public items: buyerDetails[] = [];
  data1: any;
  isBillGenerated: Boolean;
  billNo: String;
  
  

  public generate: GenerateBillResponse[] = [];
  generateBillResponse: GenerateBillResponse;
 

  constructor(private http: HttpClient, private avonService: AvonService) { }

  ngOnInit() {
    this.isBillGenerated = false;
    console.log("ng on init called");
    this.avonService.getItems().subscribe(res => {
      this.items = res;
      console.log(this.items);
    })
    console.log("ng on init called");
    this.avonService.getBuy("GRR").subscribe(res => {
      this.data1 = res;
      console.log(this.data1);
  })
  }
}
*/