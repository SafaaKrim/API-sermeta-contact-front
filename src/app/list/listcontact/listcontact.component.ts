import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.models';
import { Subscription } from 'rxjs/Subscription';
import { ContactService } from 'src/app/services/contact.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteContactBoxDialog } from './delete-contact-box.component';




@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.scss']
})
export class ListcontactComponent implements OnInit ,OnDestroy {
  
  contacts : Contact[]; 
  contactSubscription: Subscription;
  id : string;
  contact: any;

  constructor( 
    private ContactService: ContactService,
    private router : Router,
    public deleteDialog: MatDialog
    ) { }

    ngOnInit() {
    this.refreshList()
     
  }

  refreshList(){
      
    this.ContactService
    .getContact()
    .subscribe((data: Contact[]) => {
      console.log('got contact list:'+data+'now setting data to contacts'); 
      this.contacts = data;
    });
  }

  initForm() {
    throw new Error("Method not implemented.");
  }
    ngOnDestroy() {
     // this.contactSubscription.unsubscribe();
    }
  
  
  changementDePage () {
    this.router.navigate(['contact/addcontact']);
   
  };

  openDeleteBox(contact:any){
    const dialogRef = this.deleteDialog.open(DeleteContactBoxDialog, {
      width: '250px',
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshList()
      });
  }
}