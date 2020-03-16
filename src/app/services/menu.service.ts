import { Injectable } from '@angular/core';

// Mocks
import { menuItens } from '../mocks/menu-itens';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getItensMenu() {
    return menuItens;
  }

}
