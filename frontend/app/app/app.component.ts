import { Component } from '@angular/core';
import { HelloService } from '../hello.service';
import '@vaadin/button';
import '@vaadin/text-field';
import { Notification } from '@vaadin/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  constructor(private helloService: HelloService) { }

  async sayHello() {
    const message = await this.helloService.sayHello(this.name);
    Notification.show(message);
  }

  update(e: CustomEvent) {
    this.name = e.detail.value;
  }
}
