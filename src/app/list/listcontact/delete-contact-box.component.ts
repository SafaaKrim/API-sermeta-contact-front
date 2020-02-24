
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'delete-contact-box.component',
    templateUrl: 'delete-contact-box.component.html',
  })
  export class DeleteContactBoxDialog {
  
    constructor(
      private contactService: ContactService,
      public dialogRef: MatDialogRef<DeleteContactBoxDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log("Data got in the delete contact:",data)
      }
  
    yes(): void {
      /// TODO delete using data._id
      const { _id } = this.data;
      this.contactService.deleteContact(_id).subscribe((data)=>{
        alert("Deleted x) tu vas modifier le texte aprEs vu que j'ai pas d'accent sur mon clavier :) ")
        this.dialogRef.close();
      },(err)=>{
        alert("Ne pouvait pas supprimer ce contact")
        console.error(err);
        this.dialogRef.close();
      })
      
    }
    no(): void {
        this.dialogRef.close();
    }
  }