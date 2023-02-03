import { Component } from '@angular/core';
import { HelloWorldEndpoint } from 'Frontend/generated/endpoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  async sayHello() {
    const message = await HelloWorldEndpoint.sayHello(this.name);
    alert(message);
  }
}
