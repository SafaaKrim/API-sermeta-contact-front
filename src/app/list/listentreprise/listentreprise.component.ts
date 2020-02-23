import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise.models';
import { Subscription } from 'rxjs/Subscription';
import { EntrepriseService } from 'src/app/services/entreprise.service';


@Component({
  selector: 'app-listentreprise',
  templateUrl: './listentreprise.component.html',
  styleUrls: ['./listentreprise.component.scss']
})

export class ListentrepriseComponent implements OnInit,OnDestroy{

  entreprises : Entreprise[]; 
  entrepriseSubscription: Subscription;
  id : string 


  constructor( 
    private entrepriseServise: EntrepriseService,
    private router: Router
    ) { }

  ngOnInit() {
    this.entrepriseServise
    .getEntreprise()
    .subscribe((data: Entreprise[]) => {
      console.log('got entreprise list:'+data+'now setting data to entreprises'); 
      this.entreprises = data;
});
  }
  
  ngOnDestroy() {
    // this.entrepriseSubscription.unsubscribe();
   }
 

  changementDePage = function () {
    this.router.navigate(['entreprise/addentreprise']);
 };

}
