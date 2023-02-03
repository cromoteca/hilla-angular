import { Injectable } from '@angular/core';
import { HelloWorldEndpoint } from 'Frontend/generated/endpoints';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  async sayHello(name: string) {
    return await HelloWorldEndpoint.sayHello(name);
  }
}
