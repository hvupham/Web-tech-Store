import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PaymentCompletedComponent } from 'src/app/Module/shared/components/payment-completed/payment-completed.component';
import { ProductType } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProvinceService } from 'src/app/services/province-service.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent  {
  dialogId!: HTMLElement |null;
  showContent: boolean = false;
  dialogData:any = {};
  cart:any ;
  errorMessages:any = [];
  myform: FormGroup;
  provinces: any[] = [];
  districts: any[] = [];
  wards: any[] = [];
  result: string = '';
  productType : ProductType[] = [];;
  constructor(fb: FormBuilder, private apiService: ProvinceService,private router: Router, private cartService: CartService,private diaolog:MatDialog) {
    this.myform = fb.group({
      firstname: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
     
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern(/^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/)]],
      streetAddress: ['', Validators.required],
      provinces: [null, Validators.required],
      district: [null, Validators.required],
      ward: [null, Validators.required],
      
    });
  }

  ngOnInit() {
    this.apiService.callAPI(1).subscribe((data) => {
      this.provinces = data;
      // console.log(this.provinces);
    });
    this.cart = this.cartService.getItems();
   
    // console.log(this.productType);
    // console.log(this.cart);
    
    
    this.check();
  }
  check() {
    
    // for (let i = 0; i < this.cart.length; i++) {
    //     console.log(this.cart[i].type[0].Capacity.discountedPrice);
        
      
    // }
    
  }
  
  get totalPrice() {
    // Calculate total price dynamically based on the current state of the cart
    this.cart = this.cartService.getItems();
    
    return this.cartService.getTotalPrice();
    
  }
  selectedProvince: string | null = null;

  onProvinceChange() {
   
    
   
    const provinceCode = this.myform.get('provinces')?.value;
    // console.log('Selected Province:', provinceCode);
  
    
    this.apiService.callApiDistrict(provinceCode).subscribe((data) => {
      this.districts = data.districts;
      // console.log(this.districts);
      
      this.wards = []; // Reset wards when province changes
      // this.printResult();
    });
  }

  onDistrictChange() {
    const districtCode = this.myform.get('district')?.value;
    // console.log('Selected districtCode:', districtCode);
    // const districtCode = (document.getElementById('district') as HTMLSelectElement).value;
    this.apiService.callApiWard(districtCode).subscribe((data) => {
      this.wards = data.wards;
      // this.printResult();
    });
  }

  // onWardChange() {
  //   this.printResult();
  // }

  // printResult() {
  //   const provinceText = this.getSelectedOptionText('#province');
  //   const districtText = this.getSelectedOptionText('#district');
  //   const wardText = this.getSelectedOptionText('#ward');
  
  //   if (districtText && provinceText && wardText) {
  //     this.result = `${provinceText} | ${districtText} | ${wardText}`;
  //   }
  // }
  
  // private getSelectedOptionText(selector: string): string {
  //   const selectedOption = document.querySelector(`${selector} option:checked`);
  //   return selectedOption ? (selectedOption.textContent || '') : '';
  // }
  navigatoCart(){
 

      this.router.navigate(['cart']);
  
  }
  checkout() {
    this.errorMessages = [];
    const formControls = this.myform.controls;
    console.log(formControls['district'].value);
    // this.apiService.getProvinces(formControls['provinces'].value).subscribe(
    //   (data) => {
      
    //     console.log(data);
    //   },
    //   (error) => {
       
    //     console.error(error);
    //   }
    // );
    // this.apiService.getDistricts(formControls['district'].value).subscribe(
    //   (data) => {
       
    //     console.log(data);
    //   },
    //   (error) => {
        
    //     console.error(error);
    //   }
    // );
    // this.apiService.getWards(formControls['ward'].value).subscribe(
    //   (data) => {
        
    //     console.log(data);
    //   },
    //   (error) => {
      
    //     console.error(error);
    //   }
    // );
    
    
    
    console.log(formControls);
    let emptyFields: string[] = [];
    for (const formControlName in formControls) {
      const formControl = formControls[formControlName];
      //  console.log(formControl.value);
      
      
      if (formControl.value === null || formControl.value === '' || formControl.value.length === 0) {
        emptyFields.push(formControlName);
      }
    }
   
      // console.log(emptyFields);
    
    
    // Kiểm tra nếu có trường nào trống, hiển thị thông báo
    if (emptyFields.length > 0) {
      for (const emptyField of emptyFields) {
        switch (emptyField) {
          case "firstname":
            this.errorMessages.push("Vui lòng điền đầy đủ thông tin cho trường Họ và tên.");
            break;
          case "email":
            this.errorMessages.push("Vui lòng điền đầy đủ thông tin cho trường Email.");
            break;
          case "number":
            this.errorMessages.push("Vui lòng điền đầy đủ thông tin cho trường Số điện thoại.");
            break;
          case "provinces":
            this.errorMessages.push("Vui lòng điền đầy đủ thông tin cho trường Tỉnh/Thành Phố.");
            break;
          
          case "district":
             this.errorMessages.push("Vui lòng điền đầy đủ thông tin cho trường Quận/Huyện.");
            break;
          case "ward":
             this.errorMessages.push("Vui lòng điền đầy đủ thông tin cho trường Phường/Xã.");
            break;
          case "streetAddress":
             this.errorMessages.push("Vui lòng điền đầy đủ thông tin cho trường Địa chỉ nhà.");
              break;
          }  
          // console.log(this.errorMessages);
          
    }
  }
    else {
      
      this.diaolog.open(PaymentCompletedComponent,{
        
     
      })
    
       this.cartService.clearCart();
      
      
    }
  }
  ShowTrue(){
    this.showContent=true;
  }
  close() {
    this.showContent=false;
  }

  
  
    
  
  
   
  
}

