import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/data-types';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

  productData: undefined | Product;
  productMessage: undefined | string;

  constructor (private route: ActivatedRoute, private product: ProductService, private router: Router) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.product.getProduct(productId).subscribe((data:any) => {
      console.log(data);
      this.productData = data.product
      
    })
    
  }

  submit(data: Product){
    if (this.productData) {
      data._id = this.productData._id
    }
    this.product.updateProduct(data).subscribe((result) => {
      if(result) {
        this.productMessage = "Product has Updated"
      }
    })

    setTimeout(()=> {
      this.productMessage = undefined
      this.router.navigate(['/seller-home'])
    },3000)
  }

}
