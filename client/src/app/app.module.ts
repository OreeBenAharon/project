import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { LoginMainComponent } from './components/login-main/login-main.component';
import { LoginBlockComponent } from './components/login-block/login-block.component';
import { LoginAboutComponent } from './components/login-about/login-about.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { RegisterMainComponent } from './components/register-main/register-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { StoreMainComponent } from './components/store-main/store-main.component';
import { StoreCartComponent } from './components/store-cart/store-cart.component';
import { StoreFormComponent } from './components/store-form/store-form.component';
import { StoreItemComponent } from './components/store-item/store-item.component';
import { StoreBarComponent } from './components/store-bar/store-bar.component';
import { OrderCartComponent } from './components/order-cart/order-cart.component';
import { OrderMainComponent } from './components/order-main/order-main.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreListComponent } from './components/store-list/store-list.component';
import { StoreCategsComponent } from './components/store-categs/store-categs.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreListResolver } from './components/store-list/store-list.resolver';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminEditbarComponent } from './components/admin-editbar/admin-editbar.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminItemComponent } from './components/admin-item/admin-item.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

// import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginMainComponent,
    LoginBlockComponent,
    LoginAboutComponent,
    LoginInfoComponent,
    RegisterDialogComponent,
    RegisterMainComponent,
    StoreMainComponent,
    StoreCartComponent,
    StoreFormComponent,
    StoreItemComponent,
    StoreBarComponent,
    OrderCartComponent,
    OrderMainComponent,
    OrderFormComponent,
    StoreListComponent,
    StoreCategsComponent,
    AdminMainComponent,
    AdminEditbarComponent,
    AdminListComponent,
    AdminItemComponent,
    HighlightPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    FontAwesomeModule,
    MatTabsModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatListModule,
    MatButtonModule,
    // InputTextModule,

  ],
  exports: [MatSidenavModule],
  providers: [StoreListResolver,
              AuthGuard,
              AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
