import { Component, ViewEncapsulation } from '@angular/core';
import { Partner } from 'src/Data/partner';
import SwiperCore,{Navigation,Pagination,EffectCoverflow} from 'swiper' 
SwiperCore.use([Navigation,Pagination,EffectCoverflow]);
@Component({
  selector: 'app-home-partner',
  templateUrl: './home-partner.component.html',
  styleUrls: ['./home-partner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePartnerComponent {
  partner:any;
  
  ngOnInit() {
    this.partner=Partner;
  }
 
  
  
}
