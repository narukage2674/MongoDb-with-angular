import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from './common.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private newService :CommonService,) {   }  
   Repdata;  
   valbutton ="Save";
  editmode=false;
  
   
   
ngOnInit() {    
  this.newService.GetUser().subscribe(data =>  this.Repdata = data);  
}  
  
onSave = function(user,isValid: boolean) {    
 user.mode= this.valbutton;  
  this.newService.saveUser(user)  
  .subscribe(data =>  {   
       
    this.ngOnInit();    
  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {
 this.editmode=true;  
this.id = kk._id;  
this.name= kk.name;  
this.address= kk.address;  
this.valbutton ="Update";
this.onClear();
}  
  
delete = function(id) {  
this.newService.deleteUser(id)  
.subscribe(data =>   {  this.ngOnInit();}, error => this.errorMessage = error )   
} 
onClear()
{
  this.valbutton="Save";
}
}  

