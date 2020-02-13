import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  uri = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { }

  addContact( nom : String , prenom : String , sexe : String ,adresse_mail : String , telephone : String , ville : String, entreprise: String) {
    alert('dans service');
 
    this.http.post(`${this.uri}/`, {'nom' : nom , 'prenom' : prenom , 'adresse_mail' : adresse_mail , 'telephone'  : telephone , 'ville' : ville , 'entreprise' : entreprise }).subscribe(res => console.log('Done'));
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
 
