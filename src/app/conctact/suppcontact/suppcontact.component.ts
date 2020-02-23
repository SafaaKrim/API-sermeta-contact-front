import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.models';

@Component({
  selector: 'app-suppcontact',
  templateUrl: './suppcontact.component.html',
  styleUrls: ['./suppcontact.component.scss']
})
export class SuppcontactComponent implements OnInit {
  
  contact :any;
  id:String;

  constructor(private route: ActivatedRoute,
    private ContactService : ContactService,) { }

  ngOnInit() {

     //this.ContactService.deleteContact(this.contact.id);
  //   this.ContactService
  // .deleteContact(this.contact.id)
  // .subscribe(
  //   res =>{ this.contact= this.id

  //   }
  // );
  this.contact('deleteContact', ['$scope', '$http' ,function($scope,$http) { 
    $scope.errors = [];
    $scope.msgs = [];     
    $scope.ContactService = function(id){
      $http({method: 'delet'}).success(function(data: { msg: string; error: any; }){  if (data.msg != '') { 
      $scope.msgs.push(data.msg);     
      }                          
     else{                        
    $scope.errors.delete(data.error);   
  }

    })
    .error(function(data) { $scope.errors.push(status);   });   
    };}]);

}
}