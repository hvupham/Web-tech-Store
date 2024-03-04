import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item:any;
  @Input() i:any;
  total:number=0;
  constructor(  private cartService: CartService,private router:Router){
    
  }
  updateItem(num:number){
    this.item.quantity += num;
    if(this.item.quantity > 1)
        {
           this.total = this.cartService.getTotalPrice()
          
        }
    else if(this.item.quantity<1){
      this.addedCart.splice(this.addedCart.indexOf(this.item),1) ;
    }
   this.cartService.setQuantity(this.item.quantity,this.item.id);
    
  }
  addedCart:any=[];
  
  ngOnInit(){
    this.addedCart=this.cartService.getItems();
    
  }
  removeCart(){
    
    this.addedCart.splice(this.addedCart.indexOf(this.item),1) ;
    
  }
  
}
