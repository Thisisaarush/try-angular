import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'about-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent {
  @Input() occupation!: string; // pass data/props from parent to child
  @Output() logCompany = new EventEmitter<string>(); // pass data/props from child to parent
}
