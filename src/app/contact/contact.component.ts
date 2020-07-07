import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../services/feedback.service';
import {Feedback} from '../shared/feedback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedback: Feedback;
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

}
