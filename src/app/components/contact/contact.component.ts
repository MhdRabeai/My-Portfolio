import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

// To install Email js
// $ npm install @emailjs/browser --save

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  array: any[] = [];
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  send(data: any) {
    emailjs.init('FV4QmBj8ZAHyRbU7n');
    emailjs.send('service_3p0nzni', 'template_fafgxfj', {
      from_name: data.name,
      to_name: 'Admin',
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    });

    this._snackBar.open(' Message has been sent (✔) ', '', {
      duration: 3000,
    });
    this.form.reset();
  }
}
