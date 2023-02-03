import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    ciao
  `,
  styles: [],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
