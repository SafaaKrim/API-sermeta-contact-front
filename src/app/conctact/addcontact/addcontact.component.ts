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
     nom: ['', Validators.required ],
      prenom : ['', Validators.required ],
      sexe : ['', Validators.required ],
      adresse_mail : ['', Validators.required ],
      téléphone : ['', Validators.required ],
      ville : ['', Validators.required ],
      entreprise : ['', Validators.required ]
    });
  }


  ngOnInit() {
    this.initForm();

  }
  initForm() {
    this.contactForm = this.formBuilder.group({
    nom: ['', Validators.required ],
     prenom : ['', Validators.required ],
     sexe : ['', Validators.required ],
     adresse_mail : ['', Validators.required ],
     téléphone : ['', Validators.required ],
     ville : ['', Validators.required ],
     entreprise : ['', Validators.required ]
    });
  }


  onSubmitForm() {
    const formValue = this.contactForm.value;
    const newcontact = new Contact(
      formValue['nom'],
      formValue['prenom'],
      formValue['sexe'],
      formValue['adresse_mail'],
      formValue['téléphone'],
      formValue['ville'],
      formValue['entreprise']
    );
    //this.contactService.addcontact(newContact);
    this.router.navigate(['/listcontacts']);
  }

}