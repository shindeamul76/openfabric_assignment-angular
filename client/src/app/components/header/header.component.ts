import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/data-types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType: string = 'default';
  sellerName: string = '';
  searchResult: undefined | Product[];
  searchName: undefined | string;
  constructor (private route: Router, private product:ProductService) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller'
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller')
            let sellerData = sellerStore && JSON.parse(sellerStore)
            this.sellerName = sellerData.name
          }
          
        }else {
            this.menuType = 'default'
        }
      }
    })
  }

  logout () {
    localStorage.removeItem('seller')
    this.route.navigate(['/'])
  }

  searchProduct (query:KeyboardEvent) {

    if(query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result: any)=> {

        if(result.products.length > 5) {
          result.products.length = 5
        }
        this.searchResult = result.products

        
      })
    }
  }

  hideSearch() {
    this.searchResult = undefined
  }

  submitSearch (value: string) {
    this.route.navigate([`search/${value}`])
  }

 

  redirecttToDetails (id: string) {
    this.route.navigate([`details/${id}`])
  }
}
