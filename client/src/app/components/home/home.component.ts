import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/data-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularProduct: undefined | Product[];
  trendyProducts: undefined | Product[];

  constructor (private product: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data:any) => {
      this.popularProduct = data.products
      
    })

    this.product.trendyProducts().subscribe((data: any) => {
    this.trendyProducts = data.products
   })
  }

  detailsClick (id: string) {
    this.router.navigate([`details/${id}`])
  }

  
}
