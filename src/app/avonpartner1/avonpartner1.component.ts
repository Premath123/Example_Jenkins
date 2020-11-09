import { Component, OnInit } from '@angular/core';
import { AvonService } from "../services/avon.service";
import { HttpClient } from '@angular/common/http';
import { buyerDetails } from '../models/buyerDetails';
import { ProductDetails } from '../models/ProductDetails';
import { RedeemPointsRequest } from '../models/RedeemPointsRequest';
import { productarr } from '../models/productarr';

@Component({
  selector: 'app-avonpartner1',
  templateUrl: './avonpartner1.component.html',
  styleUrls: ['./avonpartner1.component.css']
})
export class Avonpartner1Component implements OnInit {
dataavon: any;
datastore: any;
buyerID:string;
buydel:any;
productID:any;
unitPrice:any;
public productdel:ProductDetails[]=[];
billamt=[];
b:number;
item: any;
a:string;
productsel:any;
total: any;
pdtdel=[];


redeemPointsRequest:RedeemPointsRequest;


  constructor(private http: HttpClient, private avonService: AvonService) { }

  ngOnInit() {

    console.log("ng for buyer");
this.buyerID="GRR";
    this.avonService.getBuyerDes(this.buyerID).subscribe(res => {
      this.buydel = res;
      console.log(this.buydel);
    })

console.log("ng for products del");
this.avonService.getProductD().subscribe(res => {
  this.productdel= res;
  console.log(this.productdel);
})





    console.log("ng on init called");
    this.avonService.getAvon().subscribe(res => {
      this.dataavon = res;
      console.log(this.dataavon);
    })
    this.avonService.getStore().subscribe(res => {
      this.datastore = res;
      console.log(this.datastore);
  })
}

onUpdate(item,item1){
 
  localStorage.setItem("productID", item);
  localStorage.setItem("unitPrice", item1);
   var a = localStorage.getItem("productID");
    var b = localStorage.getItem("unitPrice");
  
  console.log(a);
  console.log(b);
  /*this.pdtdel.push(item);
  this.addProduct(this.pdtdel);*/

this.billamt.push(item1);
this.addPrice(this.billamt);
}
addPrice(Array){
  let sum = 0;
for (let i = 0; i < Array.length; i++) {
sum += Array[i];
}
this.total = sum;
console.log("Total ....", this.total); 
}
/*
addProduct(Array){
  console.log("test product");
  var product:string[] = [ ];
   var prd=["resource:org.avon.loyalty.Product#"]
  for (let i=0; i< Array.length; i++){
    product= prd.concat(Array[i].toString())
    console.log("Total ....", product);
  }
}


*/





selectProduct(name) 
{
 this.productsel= localStorage.getItem("productID");
this.redeemPointsRequest= new RedeemPointsRequest();
// const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
//console.log("random--", random);


this.redeemPointsRequest.avon= "resource:org.avon.loyalty.AvonStore#AVON";
this.redeemPointsRequest.buyer= "resource:org.avon.loyalty.Buyer#GRR";
this.redeemPointsRequest.store= "resource:org.avon.loyalty.PartnerStore#ADIDAS";
this.redeemPointsRequest.product= [
  "resource:org.avon.loyalty.Product#"+this.productsel
  
];
this.redeemPointsRequest.billAmount= this.total;
this.redeemPointsRequest.pointsRedeemed=name;

this.avonService.redeemPoints(this.redeemPointsRequest).subscribe(res => {
//this.item = res;
console.log("button clicked-- res is--", res);
console.log(localStorage.getItem("unitPrice"));

})
} 

}
