import { Injectable } from '@angular/core';
import { menuItens } from '../mocks/menu-itens';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getItensMenu() {
    return menuItens;
  }
}
