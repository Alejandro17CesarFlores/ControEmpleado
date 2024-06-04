import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LectorComponent } from './lector/lector.component';
import { Routes } from '@angular/router';


const appRoutes:Routes=[
  {path:"login", component:LoginComponent}



 ]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    LectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
