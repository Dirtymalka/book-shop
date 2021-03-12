import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.scss']
})
export class OrdersFormComponent implements OnInit {
form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      eMail: new FormControl('', [Validators.email, Validators.required]),
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        house: new FormControl('', Validators.required),
        apartment: new FormControl('', Validators.required)
      })
    });
  }

  submit(): void {

  }
}
