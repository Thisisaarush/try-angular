import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'test-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userName?: string | null;
  nameControl = new FormControl(''); // FormControl() is used to bind a reference to a particular form element

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.userName = this.nameControl.value;
  }
}
