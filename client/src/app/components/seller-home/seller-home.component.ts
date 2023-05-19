import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/data-types';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

  productList: undefined | Product[]

  constructor (private product: ProductService) {}

  productMessage: undefined | string;
  deleteicon = faTrash
  editicon = faEdit

  ngOnInit(): void {
    this.productsList()
  }

  

  deleteProduct(id: string) {
    this.product.deleteProduct(id).subscribe((result: any) => {
      if(result) {
        this.productMessage = result.message
        alert('Product is deleted Successfully..')
        this.productsList()
      }
    })
    setTimeout(()=> {
      this.productMessage = undefined
    }, 3000)
  }

  productsList() {
    this.product.productList().subscribe((result:any) => {
      this.productList = result.products
      
    })
  }

  

}
