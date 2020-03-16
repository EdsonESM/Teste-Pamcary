import { Component } from '@angular/core';

// Material
import { MatSnackBar } from '@angular/material/snack-bar';

// Form
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

// Services
import { RegisterMessagesService } from '../../services/register-messages.service';

// Pipes
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register-messages',
  templateUrl: './register-messages.component.html',
  styleUrls: ['./register-messages.component.scss']
})
export class RegisterMessagesComponent {

  phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  registerForm: any;

  subjectMatterOptions = this.registerMessagesService.getSubjectMatterOptions();

  constructor(
    private formBuilder: FormBuilder,
    private registerMessagesService: RegisterMessagesService,
    private datePipe: DatePipe,
    private matSnackBar: MatSnackBar
  ) {
    this.generateForm();
  }

  generateForm() {
    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      subjectMatter: [null, Validators.required],
      phone: [null],
      message: [null, [Validators.required, Validators.maxLength(500)]],
    });
  }

  saveMessage() {
    this.getAdditionalInfoMessage();

    this.registerMessagesService.registerMessage(this.registerForm.value);

    this.resetForm();

    this.openSnackBar('Mensagem cadastrada com sucesso!!', '');
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 3000,
    });
  }

  getAdditionalInfoMessage() {
    this.registerForm.value.id = Date.now();
    this.registerForm.value.registrationTime = this.datePipe.transform(Date.now(), 'HH:mm');
  }

  resetForm() {
    let control: AbstractControl = null;

    this.registerForm.reset();
    this.registerForm.markAsUntouched();

    Object.keys(this.registerForm.controls).forEach((name) => {
      control = this.registerForm.controls[name];
      control.setErrors(null);
    });

    this.registerForm.setErrors({ invalid: true });
  }

  lettersOnly(evt) {
    evt = (evt) ? evt : event;
    const charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
      ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }
}
