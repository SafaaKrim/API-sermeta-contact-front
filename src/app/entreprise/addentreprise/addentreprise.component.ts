import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntrepriseService } from '../../services/entreprise.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-addentreprise',
  templateUrl: './addentreprise.component.html',
  styleUrls: ['./addentreprise.component.scss']
})
export class AddentrepriseComponent implements OnInit {
  denomination: String;
  finalite: String;
  taille: String;
  statut_juridique:String;
  natinalite: String;
  ville: String;
  contact: String;
  id: string;
  entrepriseForm: FormGroup;
  errorMessage: [ ];

  constructor(private route: ActivatedRoute ,
    private formBuilder: FormBuilder,
    private EntrepriseService: EntrepriseService,
    private router: Router
    
  ) { this.createForm();}

  createForm() {
    this.entrepriseForm = this.formBuilder.group({
      denomination: '',
      finalite: '',
      taille: '',
      statut_juridique:'',
      natinalite: '',
      ville: '',
      contact: ''
    });
  }


  ngOnInit() {

    this.initForm();
    this.route.queryParams
    .filter(entreprise => entreprise.id)
    .subscribe(entreprise => {
      console.log(entreprise); // {id: "popular"}
    if (entreprise.id == null){
  console.log("contactid est null")

    }
  else { 
  this.id = entreprise.id;
  console.log(this.id); // popular
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
  initForm() {
    this.entrepriseForm = this.formBuilder.group({
      denomination: '',
      finalite: '',
      taille: '',
      statut_juridique:'',
      natinalite: '',
      ville: '',
      contact: ''
    });
  }


  onSubmitForm() {
    //const formValue = this.contactForm;
    alert(this.entrepriseForm.value.nom);
    this.EntrepriseService.addEntreprise(this.entrepriseForm.value.denomination,
      this.entrepriseForm.value.finalite,
      this.entrepriseForm.value.taille,
      this.entrepriseForm.value.statut_juridique,
      this.entrepriseForm.value.natinalite,
      this.entrepriseForm.value.ville,
      this.entrepriseForm.value.entreprise);

    alert('Dans Component');
    
   // this.router.navigate(['/listentreprise']);
  }

}
