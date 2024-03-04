import { Component, ViewEncapsulation } from '@angular/core';
import { SlideBanner } from 'src/Data/slidebanner';
import SwiperCore,{Navigation,Pagination,EffectCoverflow,Autoplay, Virtual} from 'swiper' 
SwiperCore.use([Navigation,Pagination,EffectCoverflow,Autoplay]);
SwiperCore.use([Virtual]);
@Component({
  selector: 'app-slide-banner',
  templateUrl: './slide-banner.component.html',
  styleUrls: ['./slide-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideBannerComponent {
  slideBanner:any;
 
  ngOnInit() {
    this.slideBanner = SlideBanner;
  
    // Kiểm tra dung lượng của ảnh trong SlideBanner
    
  }
  
 
  
  

  
 
  
}
