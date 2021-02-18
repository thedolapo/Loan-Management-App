import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutViewComponent } from './features/layout-view/layout-view.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TransactionPageComponent } from './features/transaction-page/transaction-page.component';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { SettingsPageComponent } from './features/settings-page/settings-page.component';
import { LoginComponent } from './features/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from '../app/material-module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutViewComponent,
    DashboardComponent,
    TransactionPageComponent,
    ProfilePageComponent,
    SettingsPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxDatatableModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
