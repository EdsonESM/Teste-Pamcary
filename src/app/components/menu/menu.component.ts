import { Component, OnInit } from '@angular/core';
import { itens } from '../../mocks/menu-itens';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  itensArray = this.menuService.getItensMenu();

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void { }

}
