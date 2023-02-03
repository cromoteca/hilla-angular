import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';

import { AppComponent } from './app/app.component';

console.log('Angular app bootstrapped');

bootstrapApplication(AppComponent, {
  providers: [provideFileRouter()],
});
