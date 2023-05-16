import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  addProductMessage: string | undefined;

  constructor (private product:ProductService) {}

  submit (data: Product) {
    console.log(data);
    this.product.addProduct(data).subscribe((result) => {
      console.log(result);

      if (result) {
        this.addProductMessage = 'Product is added successfully';
      } 
    });
    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }

}
