import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product.model';
import { ProductsService } from './../services/products.service';
import { CategoryService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  constructor() { }

  ngOnInit() {
   }

}
