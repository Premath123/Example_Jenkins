import { Injectable } from '@angular/core';

import { RootObject } from '../customer/customer.interface';
import { ItemResponse } from '../models/ItemResponse';


import { BuyerResponse } from '../models/BuyerResponse';

import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";


import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { GenerateBillRequest } from '../models/GenerateBillRequest';
import { GenerateBillResponse } from '../models/GenerateBillResponse';
import { AddToCartRequest } from '../models/AddToCartRequest';
import { AddToCartResponse } from '../models/AddToCartResponse';
import { CheckOutOrderRequest } from '../models/CheckOutOrderRequest';
import { CheckOutOrderResponse } from '../models/CheckOutOrderResponse';

import { buyerDetails} from '../models/buyerDetails';
import { repDetails } from '../models/repDetails';
import{TransferTokenRequest} from '../models/TransferTokenRequest';
import{TransferTokenResponse} from '../models/TransferTokenResponse';
import {ProductDetails } from '../models/ProductDetails';
import { RedeemPointsResponse } from '../models/RedeemPointsResonse';
import { RedeemPointsRequest} from '../models/RedeemPointsRequest';



const API_URL = "http://ec2-52-2-140-159.compute-1.amazonaws.com:3000/api/";
@Injectable({
  providedIn: 'root'
})
export class AvonService {

  constructor(private http: Http) { }


tokenTransfer( 
    transferTokenRequest: TransferTokenRequest
    ): Observable<TransferTokenResponse> {
    console.log("request body", JSON.stringify(transferTokenRequest));
    var options = new RequestOptions({
    headers: new Headers({
    "Content-Type": "application/json"
    })
    });
    return this.http
    .post(
    API_URL + "TokenTransfer/",
    JSON.stringify(transferTokenRequest), options
    )
    .pipe(map((response: Response) => <TransferTokenResponse>response.json()));
    } 


    redeemPoints(
      redeemPointsRequest: RedeemPointsRequest
    ): Observable<RedeemPointsResponse>{
      console.log("req body", JSON.stringify(redeemPointsRequest));
      var options = new RequestOptions({
        headers: new Headers({
          "content-Type": "application/json"
        })
      });
      return this.http
      .post(
        API_URL + "RedeemPoints",
        JSON.stringify(redeemPointsRequest), options
      )
      .pipe(map((response : Response) => <RedeemPointsResponse>response.json()));
    }
      
    






  getItems(): Observable<ItemResponse[]> {
    return this.http
      .get(
        API_URL + "Item/"
      )
      .pipe(map((response: Response) => <ItemResponse[]>response.json()));
  }


  getBuyerD(): Observable<buyerDetails[]> {
      return this.http
      .get(
        API_URL + "Buyer/"
      )
      .pipe(map((response: Response) => <buyerDetails[] >response.json()));
  }

  getProductD(): Observable<ProductDetails[]> {
      return this.http
      .get(
        API_URL + "queries/ProductsByPartner?store=ADIDAS"
      )
      .pipe(map((response: Response) => <ProductDetails[] >response.json()));
  }




  getBuyerDes(id: string): Observable<buyerDetails[]> {
    return this.http
    .get(
      API_URL + "Buyer/" +id
    )
    .pipe(map((response: Response) => <buyerDetails[] >response.json()));
}
  getReps(id: string): Observable<repDetails[]> {
    return this.http
    .get(
      API_URL + "Rep/" +id
    )
    .pipe(map((response: Response) => <repDetails[] >response.json()));
}



  getBuyer(id: String
  ): Observable<BuyerResponse> {
    return this.http
      .get(
        API_URL + "Buyer/" + id
      )
      .pipe(map((response: Response) => <BuyerResponse>response.json()));
  }

  


  generateBill(
    generateBillRequest: GenerateBillRequest
  )  {
    console.log("request body" ,JSON.stringify(generateBillRequest));
    var options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    return this.http
      .post(
        API_URL + "GenerateBill/",
        JSON.stringify(generateBillRequest), options
         )
      .pipe(map((response: Response) => response.json()));
  }

  
  addToCart( 
    addToCartRequest: AddToCartRequest
  ): Observable<AddToCartResponse> {
      console.log("request body", JSON.stringify(addToCartRequest));
      var options = new RequestOptions({
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
      return this.http
        .post(
          API_URL + "AddToCart/",
          JSON.stringify(addToCartRequest), options
        )
        .pipe(map((response: Response) => <AddToCartResponse>response.json()));
    }


  checkOutOrder(
    checkOutOrderRequest: CheckOutOrderRequest
  ): Observable<CheckOutOrderResponse> {
    console.log(JSON.stringify(checkOutOrderRequest));
    var options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    return this.http
      .post(
        API_URL + "CheckOutOrder/",
        JSON.stringify(checkOutOrderRequest), options
      )
      .pipe(map((response: Response) => <CheckOutOrderResponse>response.json()));
  }
   



    getStore() {
      return this.http.get(API_URL + "PartnerStore/" );
    }
  
  getAvon() {
    return this.http.get(API_URL + "Product/");
  }

  

  
  getRep(id: String) {
    return this.http.get(API_URL + "Rep/" + id);
  }
  getRepo() {
    return this.http.get(API_URL + "Buyer/");
  }
 
  getPartnerSalesLedger(id: String) {
    return this.http.get(API_URL + "PartnerSalesLedger/" + id);
  }
  





}
