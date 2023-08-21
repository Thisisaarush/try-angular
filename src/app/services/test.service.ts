import { Injectable } from '@angular/core';

// @Injectable decorator is used to make this TestService class injectable into other components.
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {
    console.log('Test service is running');
  }

  name: string = 'test';
}
