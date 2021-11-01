import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { LoginMainComponent } from './components/login-main/login-main.component';
import { OrderMainComponent } from './components/order-main/order-main.component';
import { RegisterMainComponent } from './components/register-main/register-main.component';
import { StoreListResolver } from './components/store-list/store-list.resolver';
import { StoreMainComponent } from './components/store-main/store-main.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {path: 'login', component: LoginMainComponent},
    {path: 'register', component: RegisterMainComponent},
    {path: 'store', component: StoreMainComponent, resolve:{StoreList:StoreListResolver}, canActivate:[AuthGuard]},
    {path: 'order', component: OrderMainComponent,canActivate:[AuthGuard]},
    {path: 'admin', component: AdminMainComponent, canActivate:[AdminGuard]},
    {path: '', redirectTo: 'login', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
