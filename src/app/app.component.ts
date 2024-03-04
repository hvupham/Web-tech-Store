import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import SwiperCore,{Navigation,Pagination,EffectCoverflow,Autoplay} from 'swiper' 
SwiperCore.use([Navigation,Pagination,EffectCoverflow,Autoplay]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  snowflakes: any[] = [];

  ngOnInit() {
    this.createSnowflakes();
  }

  createSnowflakes() {
    for (let i = 0; i < 5; i++) {
      const snowflake = {
        left: Math.random() * window.innerWidth,
        duration: 5 + Math.random() * 5
      };
      this.snowflakes.push(snowflake);
    }
  }

}
