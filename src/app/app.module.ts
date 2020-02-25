import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar'
import { AppComponent } from './app.component';
import { ConctactComponent } from './conctact/conctact.component';
import { DetailscontactComponent } from './conctact/detailscontact/detailscontact.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { DetailsentrepriseComponent } from './entreprise/detailsentreprise/detailsentreprise.component';
import { AddentrepriseComponent } from './entreprise/addentreprise/addentreprise.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListcontactComponent } from './conctact/listcontact/listcontact.component';
import { ListentrepriseComponent } from './entreprise/listentreprise/listentreprise.component';
import { ContactService } from './services/contact.service';
import { EntrepriseService } from './services/entreprise.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './conctact/addcontact/addcontact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteContactBoxDialog } from './conctact/listcontact/delete-contact-box.component';
import { DeleteEntrepriseBoxDialog } from "./entreprise/listentreprise/delete-entreprise-box.component";



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'entreprise/listentreprise', component: ListentrepriseComponent},
  { path: 'conctact/listcontact', component: ListcontactComponent},
  { path: 'contact/conctact', component: ConctactComponent},
  { path: 'entreprise/entreprise', component: EntrepriseComponent},
  { path: 'contact/addcontact', component: AddcontactComponent},
  { path: 'entreprise/addentreprise', component: AddentrepriseComponent},
  { path: 'contact/detailscontact', component: DetailscontactComponent},
  { path: 'entreprise/detailsentreprise', component: DetailsentrepriseComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    AddcontactComponent,
    DetailsentrepriseComponent,
    ConctactComponent,
    DetailscontactComponent,
    EntrepriseComponent,
    DetailsentrepriseComponent,
    AddentrepriseComponent,
    HeaderComponent,
    FooterComponent,
    ListcontactComponent,
    ListentrepriseComponent,
    HomeComponent,
    DeleteContactBoxDialog,
    DeleteEntrepriseBoxDialog
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    BrowserModule,
    ContactService,
    EntrepriseService
  ],
  bootstrap: [AppComponent],
  entryComponents:[DeleteContactBoxDialog,DeleteEntrepriseBoxDialog],

})
export class AppModule { }