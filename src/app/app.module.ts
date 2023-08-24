import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './services/test.service';
import { AboutComponent } from './components/about/about.component';
import { NameComponent } from './components/name/name.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

// Decorator @NgModule is used to add metadata to a module class
@NgModule({
  declarations: [AppComponent, AboutComponent, NameComponent, FormComponent], // Declared the Root Component
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule], // importing modules to add support for specific things to angular like BrowserModule for Browser Support.
  providers: [TestService], // Contains Services
  bootstrap: [AppComponent], // Initialize the Root Component
})
export class AppModule {}
