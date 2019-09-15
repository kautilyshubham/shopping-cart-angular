import { map } from 'rxjs/Operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;
  search;
  constructor(private productsServive: ProductsService,
              private router: Router,
              private route: ActivatedRoute) { 
               this.products$ = this.productsServive.getAll();
               
              }

  ngOnInit() {
      // this.products = this.productsServive.getProducts();
      // this.productsServive.productChanged.subscribe(
      //   (products)=>{
      //     this.products = products;
      //   }
      // )
  }
  

}
