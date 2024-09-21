import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product2';
import { ProductSearchService } from 'src/app/services/searchProduct.service';
@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent {
  products$: Observable<Product[]>;

  constructor(private productSearchService: ProductSearchService) { 
    this.products$ = this.productSearchService.getProducts();
  }

  ngOnInit() {
    this.products$ = this.productSearchService.getProducts();
  }

  onSearch(searchTerm: string) {
    this.productSearchService.searchProducts(searchTerm);
  }

}
