import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login, SignUp } from 'src/app/data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLogginError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient , private router: Router) { }

  userSignUp(data: SignUp){
   
    this.http.post('http://localhost:5000/api/v1/register',
     data, 
    {observe:"response"}
    ).subscribe((result)=> {

      this.isSellerLoggedIn.next(true)
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
      // console.log(result);

    });
  }

  reloadSeller() {
    if(localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }

  userLogin (data: Login) {
    this.http.post('http://localhost:5000/api/v1/login',
     data,
     {observe:"response"}
     ).subscribe((result : any) => {
      if ( result && result.body ) {
        const accessToken = result.body.accessToken; 

        const headers = new HttpHeaders().set('token', `Bearer ${accessToken}`);
        
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.router.navigate(['seller-home'])   
      }else if(result.error) {
        console.log('User Login Failed', result.error.message);
        
      }
      
     })
  }
}
