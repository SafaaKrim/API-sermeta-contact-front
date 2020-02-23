import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { ConctactComponent } from './conctact/conctact.component';
import { SuppcontactComponent } from './conctact/suppcontact/suppcontact.component';
import { DetailscontactComponent } from './conctact/detailscontact/detailscontact.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { DetailsentrepriseComponent } from './entreprise/detailsentreprise/detailsentreprise.component';
import { AddentrepriseComponent } from './entreprise/addentreprise/addentreprise.component';
import { SupentrepriseComponent } from './entreprise/supentreprise/supentreprise.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListcontactComponent } from './list/listcontact/listcontact.component';
import { ListentrepriseComponent } from './list/listentreprise/listentreprise.component';
import { ContactService } from './services/contact.service';
import { EntrepriseService } from './services/entreprise.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import{RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './conctact/addcontact/addcontact.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'list/listentreprise', component: ListentrepriseComponent},
  { path: 'list/listcontact', component: ListcontactComponent},
  { path: 'contact/conctact', component: ConctactComponent},
  { path: 'contact/addcontact', component: AddcontactComponent},
  { path: 'entreprise/addentreprise', component: AddentrepriseComponent},
  { path: 'contact/detailscontact', component: DetailscontactComponent},
  { path: 'entreprise/detailsentreprise', component: DetailsentrepriseComponent},
  { path: 'contact/suppcontact', component: SuppcontactComponent},
  { path: 'entreprise/supentreprise', component: SupentrepriseComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    AddcontactComponent,
    DetailsentrepriseComponent,
    ConctactComponent,
    SuppcontactComponent,
    DetailscontactComponent,
    EntrepriseComponent,
    DetailsentrepriseComponent,
    AddentrepriseComponent,
    SupentrepriseComponent,
    HeaderComponent,
    FooterComponent,
    ListcontactComponent,
    ListentrepriseComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BrowserModule,
    ContactService,
    EntrepriseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
