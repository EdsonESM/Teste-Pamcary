import { Injectable } from '@angular/core';

import { subjectMatterOptions } from '../mocks/subjectMatter-options';
import { messagesSent } from '../mocks/messages-sent';

import { EventsService } from '../services/events.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterMessagesService {

  constructor(private eventsService: EventsService) { }

  getSubjectMatterOptions() {
    return subjectMatterOptions;
  }

  getAllMessages() {
    return messagesSent;
  }

  registerMessage(msg) {
    messagesSent.push(msg);
  }

  removeMessage(msg) {
    messagesSent.filter((m, i) => {
      if (m.id === msg.id) {
        messagesSent.splice(i, 1);

        this.eventsService.setSelectedMessage(undefined);
      }
    });
  }
}
