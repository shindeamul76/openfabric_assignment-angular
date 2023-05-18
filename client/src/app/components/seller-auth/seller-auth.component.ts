import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from 'src/app/data-types';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller: SellerService, private router: Router){

  }

  showLogin = false

  ngOnInit(): void{
    this.seller.reloadSeller()
  }

  signUp(data: SignUp): void {
    this.seller.userSignUp(data)
  }

  login(data: Login): void {
    this.seller.userLogin(data)
  }

  openLogin() {
    this.showLogin = true
  }

  openSignUp() {
    this.showLogin = false
  }
}
