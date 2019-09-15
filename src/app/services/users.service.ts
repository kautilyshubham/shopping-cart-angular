import { AppUser } from './../models/app.users';
import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireObject  } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService{
    constructor( private db: AngularFireDatabase){}

    saveUsers(user: firebase.User){
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        })
    };
    getusers(uid: string):AngularFireObject<AppUser> {
        return this.db.object('/users/' + uid);
    }   
}