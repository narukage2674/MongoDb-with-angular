import { Injectable } from '@angular/core';   
import {HttpClient } from '@angular/common/http';   
   
import {map} from 'rxjs/operators';  
  
@Injectable()  
export class CommonService {  
  
  constructor(private http: HttpClient) { }  
  
  saveUser(user){      
    return this.http.post('http://localhost:8080/api/SaveUser/', user).pipe(map((response) =>response) )  
                         
  }  
  
  GetUser(){       
    return this.http.get('http://localhost:8080/api/getUser/').pipe(map((response) =>response) )              
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id}).pipe(map((response) =>response) )               
  }  
 
}  