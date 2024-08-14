import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./shared/services/in-memory-data.service";
import { TextInputComponent } from './components/text-input/text-input.component';
import { CheckboxInputComponent } from './components/checkbox-input/checkbox-input.component';
import { RadioInputComponent } from './components/radio-input/radio-input.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpErrorInterceptor} from "./shared/interceptors/http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    CheckboxInputComponent,
    RadioInputComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {delay: 1000}
    ),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
