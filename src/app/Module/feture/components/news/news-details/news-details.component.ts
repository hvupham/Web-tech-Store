import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { news } from 'src/Data/news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {
  news:any;
  Idnews:any;
 constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.news =news;
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.Idnews=id;
     
    });
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
}
