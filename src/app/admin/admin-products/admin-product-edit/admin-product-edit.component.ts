
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../../services/products.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CategoryService } from '../../../services/categories.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit{
  categories;
  product={};
  productId: string;
  subsscription;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private router: Router,
              private categoriesService: CategoryService) { 
              }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.productId= this.route.snapshot.params["id"];
        if(this.productId){
        
          this.subsscription =this.productService.getProduct(this.productId).subscribe(
            p=>{
              this.product = p;
            }
          )
         
        }
      }
    
  
  
  onDelete(){
    if(confirm("Are you sure want to delete this product ?")){
        this.productService.delete(this.productId);
    }
  }
  cancel(){
    this.router.navigate(["../"], {relativeTo: this.route});
    
  }
  onSubmit(product){
    if(this.productId){
      this.productService.update(this.productId, product)
    }
    else{
      this.productService.create(product);
    }
    
  }



}
