import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
//import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
//import { RegisterComponent } from './register/register.component';
import { AuthInterceptor } from './auth.interceptor';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RepresentativeComponent } from './representative/representative.component';
import { BuyerRepComponent } from './buyer-rep/buyer-rep.component';
import { Avonpartner1Component } from './avonpartner1/avonpartner1.component';
import { CustomerComponent } from './customer/customer.component';
import { PointStatusComponent } from './point-status/point-status.component';
import { Observable } from 'rxjs';
import { HttpModule } from "@angular/http"; // for http calls
import { AvonService } from '../app/services/avon.service';
import { RepresentativeBuyComponent } from './representative-buy/representative-buy.component';
import { CheckoutrepComponent } from './checkoutrep/checkoutrep.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    LoyaltyComponent,
    CheckoutComponent,
    RepresentativeComponent,
    BuyerRepComponent,
    Avonpartner1Component,
    CustomerComponent,
    PointStatusComponent,
    RepresentativeBuyComponent,
    CheckoutrepComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
   
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
