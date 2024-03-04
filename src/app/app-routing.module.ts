import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Module/feture/components/home/home.component';
import { ProductsComponent } from './Module/feture/components/products/products.component';
import { CartComponent } from './Module/feture/components/cart/cart.component';
import { ProductDetailsComponent } from './Module/feture/components/product-details/product-details.component';
import { CheckoutComponent } from './Module/feture/components/checkout/checkout.component';
import { PaymentComponent } from './Module/feture/components/payment/payment.component';
import { NewsComponent } from './Module/feture/components/news/news.component';
import { NewsDetailsComponent } from './Module/feture/components/news/news-details/news-details.component';
import { ContactComponent } from './Module/feture/components/contact/contact.component';
import { SigninComponent } from './Module/auth/signin/signin.component';
import { SignupComponent } from './Module/auth/signup/signup.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  {path: 'checkout/payment/:id', component:PaymentComponent},
  { path: ':NPDOne/:NPDTow/:NDTThere', component:ProductsComponent},
  { path: 'cart', component:CartComponent},
  { path: 'product-details/:id', component:ProductDetailsComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'news',component:NewsComponent},
  {path: 'news-details/:id',component:NewsDetailsComponent},
  {path:'contact',component:ContactComponent},
  {path:'singin', component:SigninComponent},
  {path:'singup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
