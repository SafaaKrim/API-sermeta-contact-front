import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.models';




@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {

  contactForm: FormGroup;
  errorMessage: [ ];

  constructor(private formBuilder: FormBuilder,
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
