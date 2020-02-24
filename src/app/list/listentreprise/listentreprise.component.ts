import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise.models';
import { Subscription } from 'rxjs/Subscription';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteEntrepriseBoxDialog } from "./delete-entreprise-box.component";

@Component({
  selector: 'app-listentreprise',
  templateUrl: './listentreprise.component.html',
  styleUrls: ['./listentreprise.component.scss']
})

export class ListentrepriseComponent implements OnInit,OnDestroy{

  entreprises : Entreprise[]; 
  entrepriseSubscription: Subscription;
  id : string;
  entreprise :any;

  constructor( 
    private EntrepriseServise: EntrepriseService,
    private router : Router,
    public deleteDialog: MatDialog
    ) { }

  ngOnInit() {
    this.refreshList()
  }

  refreshList(){

    this.EntrepriseServise
    .getEntreprise()
    .subscribe((data: Entreprise[]) => {
      console.log('got entreprise list:'+data+'now setting data to entreprises'); 
      this.entreprises = data;
    });
  }

  initForm() {
    throw new Error("Method not implemented.");
  }
  ngOnDestroy() {
    // this.entrepriseSubscription.unsubscribe();
   }
 

  changementDePage = function () {
    this.router.navigate(['entreprise/addentreprise']);
 };
openDeleteBox(entreprise:any){
    const dialogRef = this.deleteDialog.open(DeleteEntrepriseBoxDialog, {
      width: '250px',
      data: entreprise
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshList()
      });
  }

}
