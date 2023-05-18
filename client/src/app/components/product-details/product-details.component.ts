import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/data-types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productData: undefined | Product;
  productQuantity:number=1;

  constructor(private activatedRoute:ActivatedRoute, private product: ProductService){}

  ngOnInit():void {
    let productId = this.activatedRoute.snapshot.paramMap.get('productId')
    productId && this.product.getProduct(productId).subscribe((result: any) => {
      this.productData = result.product
    })
  }

  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }

}
