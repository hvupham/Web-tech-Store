import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item-checkout',
  templateUrl: './cart-item-checkout.component.html',
  styleUrls: ['./cart-item-checkout.component.scss']
})
export class CartItemCheckoutComponent {
  @Input() item:any;
  @Input() i:any;
  total:number=0;
  constructor(  private cartService: CartService,private router:Router){
    
  }

  addedCart:any=[];
  
  ngOnInit(){
    this.addedCart=this.cartService.getItems();
    
  }

}
