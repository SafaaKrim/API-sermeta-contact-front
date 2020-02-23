import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';


@Component({
  selector: 'app-detailsentreprise',
  templateUrl: './detailsentreprise.component.html',
  styleUrls: ['./detailsentreprise.component.scss']
})
export class DetailsentrepriseComponent implements OnInit {

  denomination: String;
  finalite: String;
  taille: String;
  statut_juridique:String;
  natinalite: String;
  ville: String;
  contact: String;
  id: string;
  entreprise: any = {};
  
  errorMessage: [ ];


constructor(private route: ActivatedRoute,
  private EntrepriseService : EntrepriseService,
) {
}

ngOnInit() {
  
  this.route.queryParams
  .filter(entreprise => entreprise.id)
  .subscribe(entreprise => {
    console.log(entreprise); 
  if (entreprise.id == null){
console.log("entrepriseid est null")
 
  }

else { 
this.id = entreprise.id;
console.log(this.id);
this.EntrepriseService.getEntreprisebyid(this.id).subscribe
((data:any)=>{ 

  this.denomination= data.denomination,
  this.finalite = data.finalite,
  this.taille= data.taille,
  this.statut_juridique= data.statut_juridique,
  this.natinalite= data.natinalite,
  this.ville= data.ville,
  this.contact= data.contact

});
}
    });
  }
}
