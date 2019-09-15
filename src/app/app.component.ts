import { Router } from '@angular/router';
import { User } from './../../../httpAunthatication/src/app/services/user.model';
import { AuthService } from './Authentication/auth.service';
import { Component } from '@angular/core';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService){
      this.authService.user$.subscribe(
        user=>{
          if(user){
            this.userService.saveUsers(user);

            let returnUrl = localStorage.getItem("returnUrl");
            this.router.navigate([returnUrl]);
          }
        }
      )
  }

}