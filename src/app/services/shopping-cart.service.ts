import { Subscription } from 'rxjs';
import { Product } from './../models/product.model';
import { async } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create(){
    return this.db.list("/shopping-carts").push({
      dateCreated: new Date().getTime()
    })
    }

    private getCart(cartId:string){
      return this.db.object('/shopping-carts/' + cartId).valueChanges();
    }

    private async getOrCreateCartId(){
      let lCartId = localStorage.getItem("cartId");
      if(lCartId)  return lCartId;

      let result = await this.create();
      localStorage.setItem("cartId", result.key);
      return result.key;
       
  }

    async newAddtocart(product){
      let cartId = await this.getOrCreateCartId();
      console.log(cartId, product.key);
      let items$ = this.db.object("/shopping-carts/" + cartId + "/items/" + product.key)
      let itemsvalue = this.db.object("/shopping-carts/" + cartId + "/items/" + product.key).valueChanges()
      let currentvalue;
      console.log(itemsvalue)
        items$.set({quantity: 1});
      //   items$.snapshotChanges().subscribe( item=>{
      //     if(item.payload.exists()) {itemsvalue.subscribe(cvalue=> { currentvalue = cvalue.;
      //       console.log(currentvalue)
      //       items$.update({quantity: currentvalue +1});
      //     }) //inner sub
      //     }
      //    else {
      //      console.log("else")
      //    }
      // }) //main subs
    }

    async addToCart(product){
    let cartId = await this.getOrCreateCartId();
    let items$ = this.db.object("/shopping-carts/" + cartId + "/items/" + product.key)
    let itemsvalue = this.db.object("/shopping-carts/" + cartId + "/items/" + product.key).valueChanges();
    
  
    items$.snapshotChanges().subscribe(item=>{
        if(item.payload.exists()){
          items$.update({quantity: item.payload.val() });
        }
          else items$.set({ Product: product, quantity: 1})
    }
    )
  }

}
