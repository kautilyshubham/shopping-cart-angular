import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './../Authentication/auth.service';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   returnUrl;
  constructor( private authService: AuthService) { }
  
    
  loginToCart(){
    this.authService.login();
  } 
}
