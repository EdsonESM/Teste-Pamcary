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

  constructor(
    private registerMessagesService: RegisterMessagesService,
  ) {
    this.getSelectedMessage();
  }

  getSelectedMessage() {
    this.registerMessagesService.selectedMessage.subscribe(msg => {
      this.selectedMessage = msg;
    });
  }

  removeMessage() {
    this.registerMessagesService.removeMessage(this.selectedMessage);
  }
}
