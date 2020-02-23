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
  id : string;
  contact: any;

  constructor( 
    private ContactService: ContactService,
    private router : Router
    ) { }

    ngOnInit() {
      
      this.ContactService
         .getContact()
         .subscribe((data: Contact[]) => {
           console.log('got contact list:'+data+'now setting data to contacts'); 
           this.contacts = data;
         });
         
    // this.ContactService.deleteContact(Contact.id);
     //     this.ContactService
      //  .deleteContact(Contact.id)
     //  .subscribe();

     this.contact('deleteContact', ['$scope', '$http' ,function($scope,$http) { 
      $scope.errors = [];
      $scope.msgs = [];     
      $scope.suppContact = function(id){
        this.ContactService.success(function(data){  if (data.msg != '') { 
        $scope.msgs.push(data.msg);     
        }                         
       else{                        
      $scope.errors.push(data.error);   }          
      }).error(function(data, status) {
          $scope.errors.delete(status);   });   
      };}]);
  }

  initForm() {
    throw new Error("Method not implemented.");
  }
    ngOnDestroy() {
     // this.contactSubscription.unsubscribe();
    }
  
  
  changementDePage = function () {
   this.router.navigate(['contact/addcontact']);
   
   };

  }