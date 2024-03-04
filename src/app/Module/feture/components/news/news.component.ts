import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { news } from 'src/Data/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  news:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  constructor(private router:Router){}
  ngOnInit() {
    this.news =news;
  }
  navigaToNewsDetails(num: number) {
    this.router.navigate(['news-details', num]);
    
    
  }

  navigateToProductsIphone(){
    this.router.navigate(['product/product/all'], {queryParams: {brand:'iphone'}});
  }
  navigateToProductsSamsung(){
    this.router.navigate(['product/product/all'], {queryParams: {brand:'samsung'}});
  }
  navigateToProductsOppo(){
    this.router.navigate(['product/product/all'], {queryParams: {brand:'oppo'}});
  }
  onTableDataChange(event: any) {
    console.log(event);
    
    this.page = event;
    
  }
  
}
