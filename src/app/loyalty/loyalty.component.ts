import { Component, OnInit } from '@angular/core';
import { AvonService } from "../services/avon.service";
import { buyerDetails } from '../models/buyerDetails';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {
  Loyalty: any;
  
  public buyerDtls: buyerDetails[] = [];
  constructor(private avonService: AvonService) { }

  ngOnInit() {
    
    this.avonService.getBuyerD().subscribe(res => {
      this.buyerDtls = res;
      console.log(this.buyerDtls);  
  })

  }
}