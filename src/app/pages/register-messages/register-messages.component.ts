import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-messages',
  templateUrl: './register-messages.component.html',
  styleUrls: ['./register-messages.component.scss']
})
export class RegisterMessagesComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  userForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      subjectMatter: ['', Validators.required],
      phone: ['', Validators.pattern('[0-9]*')],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  ngOnInit(): void {
  }

  saveUser() {

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
