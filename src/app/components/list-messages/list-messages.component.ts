import { Component, OnInit } from '@angular/core';

import { RegisterMessagesService } from '../../services/register-messages.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent implements OnInit {

  allMessages = this.registerMessagesService.getAllMessages();

  constructor(
    private registerMessagesService: RegisterMessagesService,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    if (this.allMessages.length > 0) {
      this.eventsService.setSelectedMessage(this.allMessages[0]);
    }
  }

  changeSelectedMessage(id) {
    const newMessageSelected = this.allMessages.filter(msg => msg.id === id);
    this.eventsService.setSelectedMessage(newMessageSelected[0]);
  }

}
