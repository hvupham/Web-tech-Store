import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthComponent } from 'src/app/Module/auth/auth.component';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
  @Input() product:any
  constructor( private router:Router,private diaolog:MatDialog){}
  navigateTo(path:string) {
    console.log(path);
    
    this.router.navigate([path]);
  }
  HandleLogin(){
    this.diaolog.open(AuthComponent,{
   
     
    })
  }
}
