import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactCompletedComponent } from 'src/app/Module/shared/components/contact-completed/contact-completed.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private diaolog:MatDialog)
  {

  }
  HandleContact(){
    this.diaolog.open(ContactCompletedComponent,{
   
     
    })
  }
}
