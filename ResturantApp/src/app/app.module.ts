import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MymodalComponent } from './mymodal/mymodal.component';
import { ApiService } from './shared/api.service';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';  
import { AuthGuard } from './shared/auth.guard';
import { HeadersInterceptor } from './shared/headers.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MydashboardComponent,
    MymodalComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  
  providers: [ApiService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
