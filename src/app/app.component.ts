import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { menuItens } from './mocks/menu-itens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private titleService: Title,
    private location: Location,
    private router: Router,
  ) {
    this.routeEvent(this.router);
  }

  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.verifyMenuActive();
      }
    });
  }

  verifyMenuActive() {
    menuItens.map(item => {
      if (item.slug === this.location.path().split('/')[1]) {
        this.setTitle(`Pamcary - ${item.name}`);
      }
    });
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
