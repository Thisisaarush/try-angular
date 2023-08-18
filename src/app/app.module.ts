import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Decorator @NgModule is used to add metadata to a module class
@NgModule({
  declarations: [AppComponent], // Root Component i.e. AppComponent is declared
  imports: [BrowserModule, AppRoutingModule], // importing modules to add support for specific things to angular like BrowserModule for Browser Support.
  providers: [],
  bootstrap: [AppComponent], // Initialize the Root Component
})
export class AppModule {}
