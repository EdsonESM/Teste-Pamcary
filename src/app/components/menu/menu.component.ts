import { Component, OnInit } from '@angular/core';
import { itens } from '../../mocks/menu-itens';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  itensArray = itens;

  constructor() { }

  ngOnInit(): void {
  }

}
