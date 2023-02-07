import { Component } from '@angular/core';
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/avatar';
import '@vaadin/icon';
import '@vaadin/menu-bar';
import '@vaadin/scroller';
import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset';
import { appTitle, routes, TemplatePageTitleStrategy } from '../app-routing.module';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  constructor(
    private titleStrategy: TemplatePageTitleStrategy,
  ) { }

  pageTitle = '';

  ngOnInit() {
    this.titleStrategy.subscribe({
      next: (title) => {
        this.pageTitle = title;
      },
    });
  }

  menuItems = routes.filter(route => route.title && route.icon);
  appTitle = appTitle;
}
