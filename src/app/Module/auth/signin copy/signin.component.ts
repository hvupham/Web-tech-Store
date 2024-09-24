import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, } from '@angular/router';
import { Role } from 'src/app/models/role';
import { UserResponse } from 'src/app/responses/user/user.response';
import { ActivatedRoute, Route } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';
import { RoleService } from 'src/app/services/role.service';
import { CartService } from 'src/app/services/cart.service';
import { ApiResponse } from 'src/app/responses/api.response';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginDTO } from 'src/dto/user/login.dto';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class SigninComponent {
  @Input() changeIslogin:any;
  @ViewChild('loginForm') loginForm!: NgForm;

   
  phoneNumber: string = '33445566';
  password: string = '123456789';
  showPassword: boolean = false;

  roles: Role[] = []; // Mảng roles
  rememberMe: boolean = true;
  selectedRole: Role | undefined; // Biến để lưu giá trị được chọn từ dropdown
  userResponse?: UserResponse

  onPhoneNumberChange() {
    console.log(`Phone typed: ${this.phoneNumber}`);
    //how to validate ? phone must be at least 6 characters
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private tokenService: TokenService,
    private roleService: RoleService,
    private cartService: CartService
  ) { }
  ngOnInit() {
    this.roleService.getRoles().subscribe({      
      next: (apiResponse: ApiResponse) => { // Sử dụng kiểu Role[]
        const roles = apiResponse.data
        this.roles = roles;
        this.selectedRole = roles.length > 0 ? roles[0] : undefined;
      },
      complete: () => {
      },  
      error: (error: HttpErrorResponse) => {
        console.error(error?.error?.message ?? '');
      } 
    });
  }
  login() {
    const message = `phone: ${this.phoneNumber}` +
      `password: ${this.password}`;
    //console.error(message);

    const loginDTO: LoginDTO = {
      phone_number: this.phoneNumber,
      password: this.password,
      role_id: this.selectedRole?.id ?? 1,
      email: ""
    };
    this.userService.login(loginDTO).subscribe({
      next: (apiResponse: ApiResponse) => {
        const { token } = apiResponse.data;
        if (this.rememberMe) {          
          this.tokenService.setToken(token);
          this.userService.getUserDetail(token).subscribe({
            next: (apiResponse2: ApiResponse) => {
              this.userResponse = {
                ...apiResponse2.data,
                date_of_birth: new Date(apiResponse2.data.date_of_birth),
              };    
              this.userService.saveUserResponseToLocalStorage(this.userResponse); 
              if(this.userResponse?.role.name == 'admin') {
                this.router.navigate(['/admin']);    
              } else if(this.userResponse?.role.name == 'user') {
                this.router.navigate(['/']);                      
              }
              
            },
            complete: () => {
              this.cartService.clearCart();
            },
            error: (error: HttpErrorResponse) => {
              console.error(error?.error?.message ?? '');
            } 
          })
        }                        
      },
      complete: () => {
      },
      error: (error: HttpErrorResponse) => {
        console.error(error?.error?.message ?? '');
      } 
    });
  }
  navigateSignUp(){
    this.router.navigate(['/signup']);
  }
}
