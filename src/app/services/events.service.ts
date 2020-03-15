import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventsService {

  selectedMessage: EventEmitter<any> = new EventEmitter<any>();

  setSelectedMessage(msg) {
    this.selectedMessage.emit(msg);
  }

}
