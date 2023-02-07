import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Route, RouterModule, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Observer, Subscribable, Unsubscribable } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appTitle = 'Hilla-Angular';

export const routes: Array<Route & { title?: string; icon?: string }> = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: HelloWorldComponent, title: 'Hello World', icon: 'la la-globe' },
  { path: 'about', component: AboutComponent, title: 'About', icon: 'la la-file' },
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy implements Subscribable<string> {
  private static observers: Partial<Observer<string>>[] = [];

  constructor(private readonly title: Title) {
    super();
  }

  subscribe(observer: Partial<Observer<string>>): Unsubscribable {
    TemplatePageTitleStrategy.observers.push(observer);

    return {
      unsubscribe: () => {
        const index = TemplatePageTitleStrategy.observers.indexOf(observer);
        if (index > -1) {
          TemplatePageTitleStrategy.observers.splice(index, 1);
        }
      }
    };
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);

    if (title !== undefined) {
      this.title.setTitle(`${title} | ${appTitle}`);
      TemplatePageTitleStrategy.observers.forEach((observer) => {
        observer.next && observer.next(title);
      });
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ]
})
export class AppRoutingModule { }
