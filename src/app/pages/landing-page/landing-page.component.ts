import { Component } from '@angular/core';

// Services
import { RegisterMessagesService } from 'src/app/services/register-messages.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  countMessages = 0;

  constructor(
    private registerMessagesService: RegisterMessagesService,
  ) {
    this.getCountMessages();
  }

  getCountMessages() {
    this.registerMessagesService.countMessages.subscribe(value => this.countMessages = value);
  }

}
