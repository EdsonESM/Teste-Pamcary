import { Injectable, EventEmitter } from '@angular/core';

// Mocks
import { subjectMatterOptions } from '../mocks/subjectMatter-options';
import { messagesSent } from '../mocks/messages-sent';

@Injectable({
  providedIn: 'root'
})
export class RegisterMessagesService {

  selectedMessage: EventEmitter<any> = new EventEmitter<any>();
  countMessages: EventEmitter<any> = new EventEmitter<any>();

  getSubjectMatterOptions() {
    return subjectMatterOptions;
  }

  getAllMessages() {
    return messagesSent;
  }

  setCountMessages(messages) {
    this.countMessages.emit(messages.length);
  }

  setSelectedMessage(msg) {
    this.selectedMessage.emit(msg);
  }

  registerMessage(msg) {
    messagesSent.push(msg);
    this.setCountMessages(messagesSent);
  }

  removeMessage(msg) {
    messagesSent.filter((m, i) => {
      if (m.id === msg.id) {
        messagesSent.splice(i, 1);

        this.setSelectedMessage(undefined);
        this.setCountMessages(messagesSent);
      }
    });
  }
}
