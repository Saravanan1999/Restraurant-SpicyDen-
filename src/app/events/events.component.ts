import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Booking} from '../shared/booking';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @ViewChild('fform') bookingFormDirective;
  booking: Booking;
  bookingForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(15)] ],
      email: ['', Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") ],
      phone: ['', Validators.required ],
      date:['',Validators.required],
      time:['',Validators.required],
      people: ['', Validators.required ],
      
      message: ''
    });
  }
  onSubmit() {
    this.booking = this.bookingForm.value;
    console.log(this.booking);
    this.booking.reset({
      name: '',
      email: '',
      date: '',
      message: '',
      people:0,
      time:'',
      phone:0
    });
    this.bookingFormDirective.resetForm();
  }
  ngOnInit(): void {
  }

}
