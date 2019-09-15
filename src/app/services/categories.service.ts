import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService{
        constructor(private db: AngularFireDatabase){}
        categories = ["vegetables", "fruits", "dairy", "bread", "seasoning"];
        
        getCategories(){
            return this.categories.slice();
        }
}