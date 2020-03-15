import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { RegisterMessagesService } from '../../services/register-messages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedMessage: any;

  constructor(
    private eventsService: EventsService,
    private registerMessagesService: RegisterMessagesService,
  ) {
    this.getSelectedMessage();
  }

  ngOnInit(): void {
  }

  getSelectedMessage() {
    this.eventsService.selectedMessage.subscribe(msg => {
      this.selectedMessage = msg;
    });
  }

  removeMessage() {
    this.registerMessagesService.removeMessage(this.selectedMessage);
  }

}
