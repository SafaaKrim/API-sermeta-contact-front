import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.models';
import { Subscription } from 'rxjs/Subscription';
import { ContactService } from 'src/app/services/contact.service';




@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.scss']
})
export class ListcontactComponent implements OnInit ,OnDestroy {
  
  contacts : Contact[];
  contactSubscription: Subscription;


  constructor( 
    private contactServise: ContactService,
    private router: Router
    ) { }

    ngOnInit() {
      this.contactServise
         .getContact()
         .subscribe((data: Contact[]) => {
           this.contacts = data;
    });
}
    ngOnDestroy() {
     // this.contactSubscription.unsubscribe();
    }
  
  
  changementDePage = function () {
   this.router.navigate(['contact/addcontact']);
   
   };

}