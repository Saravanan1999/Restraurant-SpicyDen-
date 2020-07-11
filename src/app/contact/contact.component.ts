import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../services/feedback.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {Feedback} from '../shared/feedback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.feedbackForm = this.fb.group({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }
  ngOnInit(): void {
  }

}
