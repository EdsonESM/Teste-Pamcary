import { Component } from '@angular/core';

// Services
import { MenuService } from '../../services/menu.service';
import { RegisterMessagesService } from '../../services/register-messages.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  itensArray = this.menuService.getItensMenu();
  countMessages = 0;

  constructor(
    private menuService: MenuService,
    private registerMessagesService: RegisterMessagesService
  ) {
    this.getCountMessages();
  }

  getCountMessages() {
    this.registerMessagesService.countMessages.subscribe(value => this.countMessages = value);
  }

}
