import { Component, OnInit } from '@angular/core';

import { RegisterMessagesService } from '../../services/register-messages.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent implements OnInit {

  allMessages = this.registerMessagesService.getAllMessages();

  constructor(
    private registerMessagesService: RegisterMessagesService,
  ) { }

  ngOnInit(): void {
    if (this.allMessages.length > 0) {
      this.registerMessagesService.setSelectedMessage(this.allMessages[0]);
    }
  }

  changeSelectedMessage(id) {
    const newMessageSelected = this.allMessages.filter(msg => msg.id === id);
    this.registerMessagesService.setSelectedMessage(newMessageSelected[0]);
  }

}
