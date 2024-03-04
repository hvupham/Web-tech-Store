import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
 cart:any;

  constructor(private router:Router,
  private cartService: CartService
    ){}

    ngOnInit() {

      this.cart = this.cartService.getItems();
    }
 
    
    get totalPrice() {
      // Calculate total price dynamically based on the current state of the cart
      this.cart = this.cartService.getItems();
      
      return this.cartService.getTotalPrice();
    }

    
  navigateToCheckout(){
    this.router.navigate(['checkout']);
  }
  handleToProduct(){
    this.router.navigate(['products/product/all'],{queryParams: {brand:'iphone'}});
     
   }
}
