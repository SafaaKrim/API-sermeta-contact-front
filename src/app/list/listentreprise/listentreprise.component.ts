import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddentrepriseComponent } from 'src/app/entreprise/addentreprise/addentreprise.component';

@Component({
  selector: 'app-listentreprise',
  templateUrl: './listentreprise.component.html',
  styleUrls: ['./listentreprise.component.scss']
})
export class ListentrepriseComponent implements OnInit {

  constructor( 
    private router: Router
    ) { 
      AddentrepriseComponent
  }

  ngOnInit() {

  }
  changementDePage = function () {
    this.router.navigate(['entreprise/addentreprise']);
 };

}
