import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { filterMultipleColor, filterPrice, filterBrand } from './FilterData';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { dataProduct } from 'src/Data/data';


import { Product } from 'src/app/models/product';
import { MatPaginator,MatPaginatorModule  } from '@angular/material/paginator';

import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  filterColor: any;
  filterPrice: any;
  filterBrand: any;
  products: any;
  brand: any;
  colors: any;
  price: any;
  productFilter:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;

  constructor(private route:Router, private activatedRoute: ActivatedRoute,private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit(){
   
    this.filterColor =filterMultipleColor;
    this.filterPrice =filterPrice;
    this.filterBrand =filterBrand;
    this.products=dataProduct;
    
    this.activatedRoute.queryParams.subscribe((params: Params) =>{
      this.brand = params['brand'];
      
      console.log(this.brand);
      this.colors = params['color']?.split(',');
      this.price = params['price'];

      this.productFilter=filterProducts(this.products,this.brand,this.colors,this.price);

      
    });
   
    function filterProducts(products: any[], brand: string, colors: string[] | undefined, price: number | undefined) {
      let filteredProducts = [];
    
      for (let item of products) {
        if (item.brand == brand) {
          if (colors === undefined && price === undefined) {
            filteredProducts.push(item);
          } else if (colors !== undefined && price === undefined) {
            if (colors.includes(item.color)) {
              filteredProducts.push(item);
            }
          } else if (colors === undefined && price !== undefined) {
            if (item.discountedPrice < price) {
              filteredProducts.push(item);
            }
          } else if (colors !== undefined && price !== undefined) {
            if (colors.includes(item.color) && item.discountedPrice < price) {
              filteredProducts.push(item);
            }
          }
        }
      }
    
      return filteredProducts;
    }
    
  }
  onTableDataChange(event: any) {
    console.log(event);
    
    this.page = event;
    
  }

  
  ngAfterViewInit(): void {

    const pageSizeLabel = this.el.nativeElement.querySelector('#mat-paginator-page-size-label-0');

    if (pageSizeLabel) {
    
      this.renderer.setProperty(pageSizeLabel, 'textContent', 'Số sản phẩm trên mỗi trang:');
    }
    
  }


  
  
  handlefilterMuiltiple(value: string, sectionId: string){
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    
    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [];

    const valueIndex = filterValues.indexOf(value);

    
  if (valueIndex !== -1) {
    filterValues.splice(valueIndex, 1);
  } else {
    filterValues.push(value);
  }

  queryParams[sectionId] = filterValues.length > 0 ? filterValues.join(',') : undefined;
  
  this.route.navigate([], { queryParams });

  }
  handlefilterSimple(value: string, sectionId: string){
    const queryParams={ ...this.activatedRoute.snapshot.queryParams};

    queryParams[sectionId] = value;
  
    this.route.navigate([], { queryParams });
  }
  sortItems(value:string){
    if(value =='l2h'){
      this.productFilter.sort((a:any, b:any) => Number(a.discountedPrice) - Number(b.discountedPrice));
    }else if(value =='h2l'){
      this.productFilter.sort((a:any, b:any) => Number(b.discountedPrice) - Number(a.discountedPrice));
    }
  }
}
