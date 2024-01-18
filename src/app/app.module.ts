import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FaqComponent } from './faq/faq.component';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';
import { PasswordentryComponent } from './passwordentry/passwordentry.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FaqComponent,
    PasswordpageComponent,
    PasswordentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
