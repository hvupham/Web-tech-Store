import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetureComponent } from './components/feture.component';
import { HomeComponent } from './components/home/home.component';
import { HomePartnerComponent } from './components/home/home-partner/home-partner.component';
import { HomeProductComponent } from './components/home/home-product/home-product.component';
import { HomeProductSliderComponent } from './components/home/home-product-slider/home-product-slider.component';
import { SlideBannerComponent } from './components/home/slide-banner/slide-banner.component';
import { SwiperModule } from 'swiper/angular';
import { ProductsComponent } from './components/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatRadioModule} from '@angular/material/radio';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    FetureComponent,
    HomeComponent,
    HomePartnerComponent,
    HomeProductComponent,
    HomeProductSliderComponent,
    SlideBannerComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    NewsComponent,
    NewsDetailsComponent,
    ContactComponent,
    
    
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MatButtonModule, 
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    SharedModule,
    MatRadioModule,
    MatPaginatorModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     RouterLinkActive,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    FetureComponent,
    HomeComponent,
    ProductsComponent,
    
  ]
})
export class FetureModule { }
