import { map } from 'rxjs/Operators';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService,
                private router: Router){}
                
    canActivate(route, state:RouterStateSnapshot){
        return this.authService.user$.pipe(map(
            user=>{
                if(user)  return true;
                
                this.router.navigate(['/login'], {queryParams: { returnUrl: state.url } });
                return false
            }
        ));
       
        
    }
}