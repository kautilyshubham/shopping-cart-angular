import { AdminProductEditComponent } from './admin/admin-products/admin-product-edit/admin-product-edit.component';
import { AuthGuard } from './Authentication/authguard.service';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router'
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes=[
    {path: "", component: HomeComponent, pathMatch: "full"},
    {path: "products", component: ProductComponent},
    {path: "login", component: LoginComponent},    
    {path: "shopping-cart", component: ShoppingCartComponent},
    {path: "my/orders", component: MyOrdersComponent,canActivate: [AuthGuard]},
    {path: "order-success", component: OrderSuccessComponent,canActivate: [AuthGuard]},    
    {path: "check-out", component: CheckOutComponent, canActivate: [AuthGuard]},
    {path: "admin/products", component: AdminProductsComponent,canActivate: [AuthGuard]},
    {path: "admin/products/new", component: AdminProductEditComponent, canActivate: [AuthGuard]},    
    {path: "admin/products/:id", component: AdminProductEditComponent, canActivate: [AuthGuard]},
    {path: "admin/orders", component: AdminOrdersComponent,canActivate: [AuthGuard]},
    
    
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}