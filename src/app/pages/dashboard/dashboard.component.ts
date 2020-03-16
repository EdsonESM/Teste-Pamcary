import { Component } from '@angular/core';

// Services
import { RegisterMessagesService } from '../../services/register-messages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  selectedMessage: any;
  countMessages = 0;

  constructor(
    private registerMessagesService: RegisterMessagesService,
  ) {
    this.getSelectedMessage();

    this.getCountMessages();
  }

  getSelectedMessage() {
    this.registerMessagesService.selectedMessage.subscribe(msg => {
      this.selectedMessage = msg;
    });
  }

  getCountMessages() {
    this.registerMessagesService.countMessages.subscribe(count => this.countMessages = count);
  }

  removeMessage() {
    this.registerMessagesService.removeMessage(this.selectedMessage);
  }
}
