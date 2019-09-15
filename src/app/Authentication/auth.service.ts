import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from "@angular/core";
import * as firebase from 'firebase'


@Injectable()
export class AuthService{
  user$: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth,    
                private route: ActivatedRoute,
                private router: Router){
        this.user$ = afAuth.authState;
    }

    login(){
            let returnUrl = this.route.snapshot.queryParams["returnUrl"] || '/';
              localStorage.setItem("returnUrl",returnUrl) ;
            
        
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider() );
    }

    logout(){   
        this.afAuth.auth.signOut();
        this.router.navigate(["/"]);

    }
}