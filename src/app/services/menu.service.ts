import { Injectable } from '@angular/core';
import { itens } from '../mocks/menu-itens';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getItensMenu() {
    return itens;
  }
}
