import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/data-types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct (data: Product) {
     return this.http.post('http://localhost:5000/api/v1/product', data)
  }

  productList() {
    return this.http.get<Product[]>('http://localhost:5000/api/v1/product')
  }

  deleteProduct(id:string) {

      return this.http.delete(`http://localhost:5000/api/v1/product/${id}`)
   
  }

  getProduct(id:string)  {
    return this.http.get<Product>(`http://localhost:5000/api/v1/product/find/${id}`)
  }

  updateProduct(product:Product)  {
    return this.http.put(`http://localhost:5000/api/v1/product/${product._id}`, product)
  }

  popularProducts() {
    return this.http.get<Product[]>('http://localhost:5000/api/v1/product?_limit=4')
  }

  trendyProducts() {
    return this.http.get<Product[]>('http://localhost:5000/api/v1/product?_limit=8')
  }

  searchProducts(query:string) {
    return this.http.get<Product[]>(`http://localhost:5000/api/v1/product/search?q=${query}`)
  }
}
