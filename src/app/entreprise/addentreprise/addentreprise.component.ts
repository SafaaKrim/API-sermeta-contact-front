import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntrepriseService } from '../../services/entreprise.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addentreprise',
  templateUrl: './addentreprise.component.html',
  styleUrls: ['./addentreprise.component.scss']
})
export class AddentrepriseComponent implements OnInit {

  ngForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
    private EntrepriseService: EntrepriseService,
    private router: Router

  ) { }

  ngOnInit() {
  }

}
