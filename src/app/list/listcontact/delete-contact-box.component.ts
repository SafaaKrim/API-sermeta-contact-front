
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
@Component({
    selector: 'delete-contact-box.component',
    templateUrl: 'delete-contact-box.component.html',
  })
  export class DeleteContactBoxDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DeleteContactBoxDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    yes(): void {
      this.dialogRef.close();
    }
    
    no(): void {
        this.dialogRef.close();
    }
  }