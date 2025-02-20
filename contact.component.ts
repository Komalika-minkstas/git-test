import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective;

  constructor(private fb: FormBuilder) {
    this.createForm();
 }

  ngOnInit() {
  }
  
  createForm() {
    this.feedbackForm = this.fb.group({
     firstname: ['', Validators.required],
     lastname: ['', Validators.required],
     telnum: [0, Validators.required],
     email: ['', Validators.required],
     agree: false,
     contacttype: 'None',
     message: ''
  });
}

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
       firstname: '',
       lastname: '',
       telnum: 0,
       email: '',
       agree: false,
       contactType: 'None',
       message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

}
