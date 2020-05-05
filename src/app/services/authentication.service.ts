import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private httpClient: HttpClient, private router: Router) { }

public authenticate(credentials:Credentials): Observable<any>{
  console.log(credentials.userName);
 return this.httpClient.post("http://t420:8080/login",credentials);
}
loggedIn(){
  return !!localStorage.getItem('token');
}
logout(){
  localStorage.removeItem('token')
  this.router.navigate(['/home'])
}

get token() {
  const token = localStorage.getItem('token');
 return token ? JSON.parse(token) : null;
}

set token(val: string) {
 if (val) {
   localStorage.setItem('token', JSON.stringify(val));
 } else {
   localStorage.removeItem('token');
 }
}

}
