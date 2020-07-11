import { Component, OnInit, ViewChild } from '@angular/core';
import {FeedbackService} from '../services/feedback.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import {Feedback} from '../shared/feedback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective;
  feedbackForm: FormGroup;
  feedback: Feedback;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(15)]  ],
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      subject: ['', Validators.required ],
      message: ['', Validators.required ]
    });
  }
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    this.feedbackFormDirective.resetForm();
  }
  ngOnInit(): void {
  }

}
