import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { AuthComponent } from 'src/app/Module/auth/auth.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  isNewsSelected: boolean = false;
  
  navigateTo(cart:any){
    
  }
 
  constructor(private router:Router, private diaolog:MatDialog, private activeRouter:ActivatedRoute){
    
  }

  HandleLogin(){
    this.diaolog.open(AuthComponent,{
   
     
    })
  }
  navigateToProducts(){
    this.router.navigate(['product/product/all']);
  }
  navigateToHome(){
    this.router.navigate(['/']);
  }
  navigateToNews(){
    this.isNewsSelected=true;
    this.router.navigate(['news']);
  }
  navigateToContact(){
    this.router.navigate(['contact']);
  }
  navigateToCart(){
    this.router.navigate(['cart']);
  }
  handleToProduct(brand: string){
   this.router.navigate(['products/product/all'],{queryParams: {brand: brand}});
    
  }

  
  toggleMenuIcon!: HTMLElement | null;
  toggelMenu!: HTMLElement | null;

ngAfterViewInit() {
  this.toggleMenuIcon = document.getElementById('toggleMenuIcon');
  this.toggelMenu = document.getElementById('toggelMenu');

  document.addEventListener('click', (e) => {
    const clickedElement = e.target as Node;
    if (this.toggleMenuIcon && this.toggelMenu && this.toggleMenuIcon.contains(clickedElement)) {
      this.toggelMenu.classList.toggle('hta-menu-expanded');
      this.toggelMenu.classList.toggle('hidden');
    }  else if (this.toggelMenu && this.toggelMenu.contains(clickedElement)) {
      // Người dùng nhấn vào bên trong toggleMenu
      // Không thay đổi trạng thái toggleMenu ở đây
    } 
    else if(this.toggelMenu! && this.toggelMenu.classList.contains('hta-menu-expanded'))
      {
        this.toggelMenu.classList.remove('hta-menu-expanded');
        this.toggelMenu.classList.add('hidden');
      }
  });
}

}
