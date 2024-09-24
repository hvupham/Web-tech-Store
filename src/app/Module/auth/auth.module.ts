import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { RouterLinkActive, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    // SigninComponent,
    // SignupComponent,
    // AuthComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterModule,
    RouterLinkActive,
    RouterModule,
  ]
})
export class AuthModule { }
