import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  uri = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { }

  addContact(nom, prenom, sexe,adresse_mail, téléphone, ville, entreprise) {
    const obj = {
      nom : nom ,
      prenom :prenom ,
      sexe :sexe ,
      adresse_mail :adresse_mail ,
      téléphone :téléphone ,
      ville :ville ,
      entreprise :entreprise 
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getContact() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editContact(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    deleteContact(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }
}
 
