import { Component } from '@angular/core';

// Services
import { RegisterMessagesService } from '../../services/register-messages.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent {

  allMessages = this.registerMessagesService.getAllMessages();
  messageSelected: any;

  constructor(
    private registerMessagesService: RegisterMessagesService,
  ) {
    this.getMessageSelected();
    this.initializeMessage();
  }

  initializeMessage() {
    if (this.allMessages.length > 0) {
      this.registerMessagesService.setSelectedMessage(this.allMessages[0]);
    }
  }

  getMessageSelected() {
    this.registerMessagesService.selectedMessage.subscribe(msg => this.messageSelected = msg);
  }

  changeSelectedMessage(id) {
    const newMessageSelected = this.allMessages.filter(msg => msg.id === id);
    this.registerMessagesService.setSelectedMessage(newMessageSelected[0]);
  }

}
