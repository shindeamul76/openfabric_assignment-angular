import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/data-types';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {


  addProductMessage: string | undefined;
  addProductForm!:FormGroup
  submitted = false


  constructor (private product:ProductService, private router:Router, private formBuilder: FormBuilder) {}

 

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      color: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      
    })
  }

   

  submit (data: Product) {
    this.submitted = true;

    if (this.addProductForm.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }
    
    this.product.addProduct(data).subscribe((result) => {

      if (result) {
        this.addProductMessage = 'Product is added successfully';
      } 
    });
    setTimeout(() => {
      this.addProductMessage=undefined
      this.router.navigate(['seller-home'])
    }, 3000);
  }

  
  markAllFieldsAsTouched(): void {
    Object.keys(this.addProductForm.controls).forEach(field => {
      const control = this.addProductForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
  

}
