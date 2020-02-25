
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
    selector: 'delete-entreprise-box.component',
    templateUrl: 'delete-entreprise-box.component.html',
  })
  export class DeleteEntrepriseBoxDialog {
  
    constructor(
      private entrepriseService: EntrepriseService,
      public dialogRef: MatDialogRef<DeleteEntrepriseBoxDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log("Data got in the delete entreprise:",data)
      }
  
    yes(): void {
      /// TODO delete using data._id
      const { _id } = this.data;
      this.entrepriseService.deleteEntreprise(_id).subscribe((data)=>{
        alert("Supprimer")
        this.dialogRef.close();
      },(err)=>{
        alert("Ne pouvait pas supprimer cette entreprise")
        console.error(err);
        this.dialogRef.close();
      })
      
    }
    
    no(): void {
        this.dialogRef.close();
    }
  }