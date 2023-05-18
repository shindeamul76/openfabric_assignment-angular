import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/data-types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor (private activetedRoute: ActivatedRoute, private product: ProductService) {

  }

  searchResult:undefined | Product[]

  ngOnInit(): void {
    let query = this.activetedRoute.snapshot.paramMap.get('query')

    query && this.product.searchProducts(query).subscribe((result: any) => {
      this.searchResult = result.products
    })
  }
}
