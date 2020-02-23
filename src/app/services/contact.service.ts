import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  suppContact(contact: any) {
    throw new Error("Method not implemented.");
  }

  uri = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { }

  addContact( nom : String , prenom : String , sexe : String ,adresse_mail : String , telephone : String , ville : String, entreprise: String) {
    alert('dans service');
    console.log('creating a new contact');
    this.http.post(`${this.uri}/`, {'nom' : nom , 'prenom' : prenom , 'adresse_mail' : adresse_mail , 'telephone'  : telephone , 'ville' : ville , 'entreprise' : entreprise }).subscribe(res => console.log('Done'));
  }
  getContact() {
    console.log('getting contact list')
    return this
           .http
           .get(`${this.uri}`);
  }
  editContact(id: string, contactObject: any ) {
    return this
            .http
            .put(`${this.uri}/${id}`,contactObject);
    }
  deleteContact(id: string) {
      return this
                .http
                .delete(`${this.uri}/${id}`);
    }
  getContactbyid(id: string){
      return this
      .http
      .get(`${this.uri}/${id}`);
}
}
