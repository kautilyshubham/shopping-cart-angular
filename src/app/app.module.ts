import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductFilterPipe } from './pipes/productFilter.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CategoryService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/users.service';
import { AuthGuard } from './Authentication/authguard.service';
import { AuthService } from './Authentication/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminProductEditComponent } from './admin/admin-products/admin-product-edit/admin-product-edit.component';
import {DataTableModule} from "angular-6-datatable";
import { ProductFilterComponent } from './product/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    AdminProductEditComponent,
    FilterPipe,
    ProductFilterPipe,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    DataTableModule
  ],
  providers: [
    AuthService,AuthGuard,UserService,
    ProductsService,CategoryService,
    ShoppingCartService,
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
