import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-detailscontact',
  templateUrl: './detailscontact.component.html',
  styleUrls: ['./detailscontact.component.scss']
})
export class DetailscontactComponent implements OnInit {

  contact: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private contactService :   ContactService,
    private contactform : FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.contactform.group({
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
    this.route.params.subscribe(params => {
        this.contactService.editContact(params['id']).subscribe(res => {
         this.contact = res;
    });
    });
  }
}
