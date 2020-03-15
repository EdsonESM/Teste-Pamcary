import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { RegisterMessagesService } from '../../services/register-messages.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register-messages',
  templateUrl: './register-messages.component.html',
  styleUrls: ['./register-messages.component.scss']
})
export class RegisterMessagesComponent implements OnInit {

  phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  userForm: any;

  subjectMatterOptions = this.registerMessagesService.getSubjectMatterOptions();

  constructor(
    private formBuilder: FormBuilder,
    private registerMessagesService: RegisterMessagesService,
    private datePipe: DatePipe
  ) {
    this.generateForm();
  }

  ngOnInit(): void {
  }

  generateForm() {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      subjectMatter: [null, Validators.required],
      phone: [null],
      message: [null, [Validators.required, Validators.maxLength(500)]],
    });
  }

  saveUser() {
    this.userForm.value.id = Date.now();
    this.userForm.value.registrationTime = this.datePipe.transform(Date.now(), 'HH:mm');

    this.registerMessagesService.registerMessage(this.userForm.value);

    this.resetForm();
  }

  resetForm() {
    let control: AbstractControl = null;
    this.userForm.reset();
    this.userForm.markAsUntouched();
    Object.keys(this.userForm.controls).forEach((name) => {
      control = this.userForm.controls[name];
      control.setErrors(null);
    });
    this.userForm.setErrors({ invalid: true });
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
