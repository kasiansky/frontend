import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  getServerMessage(error: HttpErrorResponse){
    return error.error;
    ;
    
  }
}
