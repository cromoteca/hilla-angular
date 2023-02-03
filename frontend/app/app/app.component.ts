import { Component } from '@angular/core';
import { HelloService } from '../hello.service';

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
    alert(message);
  }
}
