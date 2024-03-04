import { Component, Input } from '@angular/core';
import { Router, } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  @Input() changeIslogin:any;
   
  constructor(private router:Router){
    
  }
  navigateToHome(){
    this.router.navigate(['/']);
  }
}
