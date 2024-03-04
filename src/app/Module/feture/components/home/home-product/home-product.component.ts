import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { dataProduct } from 'src/Data/data';
import SwiperCore,{Navigation,Pagination,EffectCoverflow} from 'swiper' 
SwiperCore.use([Navigation,Pagination,EffectCoverflow]);

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeProductComponent {
 @Input() product: any;
 dataProduct:any;
 isHovered: boolean = false;
  iphone:any ;
  samsung: any;
  vivo: any;
  oppo:any;
  ngOnInit(){
    this.dataProduct=dataProduct;
    // console.log(this.dataProduct);
    
     this.iphone =this.dataProduct.filter((item: any) => item.brand === "iphone");
     this.samsung =this.dataProduct.filter((item: any) => item.brand === "samsung");
     this.vivo =this.dataProduct.filter((item: any) => item.brand === "vivo");
     this.oppo =this.dataProduct.filter((item: any) => item.brand === "oppo");
  }
 // Sử dụng @HostListener để lắng nghe sự kiện mouseleave
 @HostListener('mouseleave') onMouseLeave() {
   this.isHovered = true;
 }

}
