import { Router } from '@angular/router';
import { map } from 'rxjs/Operators';
import { Injectable } from "@angular/core";
import { AngularFireAction, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductsService {
    constructor(private db: AngularFireDatabase,
                private router: Router,){}

    
    create(product){
         this.db.list("/products").push(product);
        this.router.navigate(["/admin/products"]);
    }

    getAll(){
       return this.db.list("/products").snapshotChanges()
    }

    getProduct(productId){
    return this.db.object('/products/' +productId).valueChanges();
    }
    update(productId, product){
        this.db.object("/products/" + productId).update(product);
        this.router.navigate(["/admin/products"]);
        
    }
    delete(productId){
        this.db.object("/products/" + productId).remove();
        this.router.navigate(["/admin/products"]);
        
    }
}