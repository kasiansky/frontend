import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Token } from 'src/app/models/token.model';
import { ErrorService } from 'src/app/services/error.service';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  form: FormGroup; 
  public credentials = new Credentials();
  public token = new Token();

  
  constructor(private router: Router, private authService: AuthenticationService, private errorService: ErrorService
    ) { }
 

    types: string[] = [
     "ADMIN",
     "COMPANY",
     "CUSTOMER"
    ]

  ngOnInit() {
    console.log('CURRENT TOKEN: ', this.authService.token);

      this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    })
  }

  get userName(){
    return this.form.get('userName');
  }
  get password() {
    return this.form.get('password')
  }
  get type(){
    return this.form.get('type')
  }


  public onSubmit() : void {
    this.authService.authenticate(this.form.value).toPromise().then(
      data =>{ 
        console.log(data);
        this.authService.token = data.token;
       
        switch (this.form.value.type) {
          case "ADMIN"  :
            this.router.navigate(['/admin']);
            break;
          case "COMPANY":
            this.router.navigate(['/company']);
            break;
          case "CUSTOMER":
            this.router.navigate(['/customer']);
            break;
        }
        
      },

      err =>  window.alert(err.error)
    )

   
   }

  

}
