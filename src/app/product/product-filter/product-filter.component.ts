import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories;
  queryParams="";
  constructor(private categoriesService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.route.queryParams.subscribe(
      params=> this.queryParams = params["category"]
    )
  }

}
