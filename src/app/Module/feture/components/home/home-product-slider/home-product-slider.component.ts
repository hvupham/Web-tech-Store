import { Component, Input } from '@angular/core';
import SwiperCore,{Navigation,Pagination,EffectCoverflow, Swiper} from 'swiper' 
SwiperCore.use([Navigation,Pagination,EffectCoverflow]);
@Component({
  selector: 'app-home-product-slider',
  templateUrl: './home-product-slider.component.html',
  styleUrls: ['./home-product-slider.component.scss']
})
export class HomeProductSliderComponent {
  @Input() title:any;
  @Input() products:any;
  
  
  ngOnInit() {
    // console.log(this.products);
    // Initialize Swiper
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
