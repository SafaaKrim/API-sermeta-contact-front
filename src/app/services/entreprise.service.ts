import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  uri = 'http://localhost:3000/entreprises';

  constructor(private http: HttpClient) { }

  addEntreprise( denomination: String, finalite: String,taille: String,statut_juridique:String,natinalite: String,ville: String,contact: String) {
    alert('dans service');
    console.log('creating a new Entreprise');
    this.http.post(`${this.uri}/`, {'denomination' : denomination , 'finalite' : finalite , 'taille' : taille , 'statut_juridique'  : statut_juridique ,'natinalite': natinalite, 'ville' : ville , 'contact' : contact }).subscribe(res => console.log('Done'));
  }
  getEntreprise() {
    console.log('getting Entreprise list')
    return this
           .http
           .get(`${this.uri}`);
  }
  editEntreprise(id: string, entrepriseObject: any) {
    return this
            .http
            .put(`${this.uri}/${id}`,entrepriseObject);
    }
    deleteEntreprise(id:string) {
      return this
                .http
                .delete(`${this.uri}/${id}`);
    }
    getEntreprisebyid(id: string){
      return this
      .http
      .get(`${this.uri}/${id}`);
}
}
 
