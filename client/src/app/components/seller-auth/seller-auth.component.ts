import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from 'src/app/data-types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  sellerSignForm!:FormGroup;
  sellerLoginForm!:FormGroup;

  constructor(private seller: SellerService, private router: Router, private formBuilder: FormBuilder){

  }

  showLogin = false

  ngOnInit(): void{
    this.sellerSignForm = this.formBuilder.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })

    this.sellerLoginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
    this.seller.reloadSeller()
  }

  signUp(data: SignUp): void {

    if(this.sellerSignForm.invalid) {
      return 
    }
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
