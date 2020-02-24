import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  denomination: String;
  finalite: String;
  taille: String;
  statut_juridique:String;
  natinalite: String;
  ville: String;
  contact: String;
  id: string;
  errorMessage: [ ];
  entrepriseForm: FormGroup;

  constructor(
    private route: ActivatedRoute ,
    private formBuilder: FormBuilder,
    private EntrepriseService: EntrepriseService,
    private router: Router
    
  ){ this.createForm();}
  

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
      console.log(entreprise); 
    if (entreprise.id == null){
      console.error("entreprise id is not supposed to be null")
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
    alert(this.entrepriseForm.value.denomination);
    const entrepriseUpdate = {
      denomination:this.entrepriseForm.value.denomination,
      finalite:this.entrepriseForm.value.finalite,
      taille:this.entrepriseForm.value.taille,
      statut_juridique:this.entrepriseForm.value.statut_juridique,
      natinalite:this.entrepriseForm.value.natinalite,
      ville:this.entrepriseForm.value.ville,
      contact:this.entrepriseForm.value.contact
    }

    console.log("You are about to edit a entreprise:", entrepriseUpdate);

    this.EntrepriseService.editEntreprise(this.id,entrepriseUpdate).subscribe((data)=>{
      console.log("updated entreprise, latest version:",data);
      alert("entreprise has been successfully updated.");
    },(err)=>{
      console.error(err);
      alert("Could not edit this entreprise");
    });
     
    // this.router.navigate(['/listentrepise']);
  }
}
