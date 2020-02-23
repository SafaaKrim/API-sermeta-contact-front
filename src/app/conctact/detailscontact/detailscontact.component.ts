import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-detailscontact',
  templateUrl: './detailscontact.component.html',
  styleUrls: ['./detailscontact.component.scss']
})
export class DetailscontactComponent implements OnInit {

    nom:string
    prenom : String;
    sexe : String;
    adresse_mail : String;
    telephone : String;
    ville : String;
    entreprise : String ;
    id:string;
    contact: any = {};

    errorMessage: [ ];
  

  constructor(private route: ActivatedRoute,
    private ContactService : ContactService,
) {
}

  ngOnInit() {
    
    this.route.queryParams
    .filter(contact => contact.id)
    .subscribe(contact => {
      console.log(contact); 
    if (contact.id == null){
  console.log("contactid est null")

    }

  else { 
  this.id = contact.id;
  console.log(this.id);
  this.ContactService.getContactbyid(this.id).subscribe
  ((data:any)=>{ 

    this.nom= data.nom,
    this.prenom = data.prenom,
    this.sexe = data.sexe,
    this.adresse_mail= data.adresse_mail,
    this.telephone = data.telephone,
    this.ville = data.ville,
    this.entreprise = data.entreprise

  });
}
  });
  }
}
