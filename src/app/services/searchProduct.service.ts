import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { dataProduct } from 'src/Data/data';
import { Product } from '../models/product2';
@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  private productsSubject = new BehaviorSubject<Product[]>(dataProduct);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  searchProducts(searchTerm: string): void {

    const lowercasedTerm = searchTerm.toLowerCase().trim();
    const filteredProducts = dataProduct.filter(product =>
      product.title.toLowerCase().includes(lowercasedTerm) ||
      product.brand.toLowerCase().includes(lowercasedTerm) ||
      product.color.toLowerCase().includes(lowercasedTerm)
    );
    this.productsSubject.next(filteredProducts);
  }
}