// This is our Root Component called app component.

import { Component } from '@angular/core';
import { TestService } from './services/test.service';

// @Component decorator is used to add metadata to a component class
@Component({
  selector: 'app-root', // unique identifier for component and will be used as a tag.
  templateUrl: './app.component.html', // link to template/html file
  styleUrls: ['./app.component.css'], // link to style/css files
})
export class AppComponent {
  // using TestService here
  constructor(private TestService: TestService) {
    console.log(TestService.name);
  }

  version: number = 16;
  imgUrl = '';

  changeValue(event: KeyboardEvent) {
    (event.target as HTMLInputElement).value = 'Angular';
  }
}
