import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seller } from '../services/seller';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css'
})
export class SellerAuth {
  constructor(private seller : Seller){}

  signUp(data:object):void{
    this.seller.userSignUp(data).subscribe((result)=>{
      console.warn(result);
    });
  } 
}