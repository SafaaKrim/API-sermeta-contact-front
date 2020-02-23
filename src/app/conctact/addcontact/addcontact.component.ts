import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';



@Component({ 
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
  
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

  constructor(private route: ActivatedRoute ,
    private formBuilder: FormBuilder,
    private ContactService: ContactService,
    private router: Router
    
  ) { this.createForm();}
  

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
  console.log("contactid est null")

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
  private newMethod(contact) {
    this.ContactService = contact.id;
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
    this.ContactService.addContact(this.contactForm.value.nom,
      this.contactForm.value.prenom,
      this.contactForm.value.sexe,
      this.contactForm.value.adresse_mail,
      this.contactForm.value.telephone,
      this.contactForm.value.ville,
      this.contactForm.value.entreprise);

      alert('Dans Component');
   // this.router.navigate(['/listcontacts']);
  }
}