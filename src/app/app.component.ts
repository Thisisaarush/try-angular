// This is our Root Component called app component.

import { Component } from '@angular/core';

// @Component decorator is used to add metadata to a component class
@Component({
  selector: 'app-root', // unique identifier for component
  templateUrl: './app.component.html', // link to template/html file
  styleUrls: ['./app.component.css'], // link to style/css files
})
export class AppComponent {
  title = 'try-angular';
}
