import { Component } from '@angular/core';
import { HelloService } from '../hello.service';
import '@vaadin/button';
import '@vaadin/text-field';
import { Notification } from '@vaadin/notification';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
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
