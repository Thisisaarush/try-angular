import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './services/test.service';
import { AboutComponent } from './components/about/about.component';

// Decorator @NgModule is used to add metadata to a module class
@NgModule({
  declarations: [AppComponent, AboutComponent], // Declared the Root Component
  imports: [BrowserModule, AppRoutingModule], // importing modules to add support for specific things to angular like BrowserModule for Browser Support.
  providers: [TestService], // Contains Services
  bootstrap: [AppComponent], // Initialize the Root Component
})
export class AppModule {}
