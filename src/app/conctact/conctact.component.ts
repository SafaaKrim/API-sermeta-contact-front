import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({

  selector: 'app-conctact',
  templateUrl: './conctact.component.html',
  styleUrls: ['./conctact.component.scss']
})
export class ConctactComponent implements OnInit {
  nom : String;
  prenom : String;
  sexe : String;
  adresse_mail : String;
  telephone : String;
  ville : String;
  entreprise : String; 
  id: string;
  contactForm: FormGroup;
  errorMessage: [ ];

  constructor(
    private route: ActivatedRoute ,
    private formBuilder: FormBuilder,
    private ContactService: ContactService,
    private router: Router
    
  ){ this.createForm();}
  

  createForm() {
    this.contactForm = this.formBuilder.group({
      nom: '',
      prenom : '',
      sexe : '',
      adresse_mail : '',
      telephone : '' ,
      ville : '',
      entreprise : ''
    });
    

  }
  ngOnInit() {


    this.initForm();
    this.route.queryParams
    .filter(contact => contact.id)
    .subscribe(contact => {
      console.log(contact); 
    if (contact.id == null){
      console.error("contact id is not supposed to be null")
    }
  else { 
  this.id = contact.id;
  console.log(this.id);
  this.ContactService.getContactbyid(this.id).subscribe
  
  ((data:any)=>{ 
    this.nom = data.nom,
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
  
initForm() {
    this.contactForm = this.formBuilder.group({
    nom: '' ,
     prenom : '',
     sexe : '',
     adresse_mail : '',
     telephone : '',
     ville : '',
     entreprise : ''
    });
  }


  onSubmitForm() {
    //const formValue = this.contactForm;
    alert(this.contactForm.value.nom);
    const contactUpdate = {
      nom: this.contactForm.value.nom,
      prenom:   this.contactForm.value.prenom,
      sexe: this.contactForm.value.sexe,
      adresse_mail: this.contactForm.value.adresse_mail,
      telephone: this.contactForm.value.telephone,
      ville: this.contactForm.value.ville,
      entreprise: this.contactForm.value.entreprise
    }

    console.log("You are about to edit a contact:", contactUpdate);

    this.ContactService.editContact(this.id,contactUpdate).subscribe((data)=>{
      console.log("updated contact, latest version:",data);
      alert("Contact has been successfully updated.");
    },(err)=>{
      console.error(err);
      alert("Could not edit this contact");
    });
     
    this.router.navigate(['/listcontact']);
  }
}