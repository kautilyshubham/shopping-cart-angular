import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;
  queryParams="";
  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private CartService: ShoppingCartService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(
      product=> this.products = product
    );
    this.route.queryParams.subscribe(
      params=> {this.queryParams= params["category"]
    })
  }

  addToCart(product){
    this.CartService.newAddtocart(product);
   // this.CartService.addToCart(product);

  }

}
