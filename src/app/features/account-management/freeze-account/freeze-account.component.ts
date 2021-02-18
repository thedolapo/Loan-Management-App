import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-freeze-account',
  templateUrl: './freeze-account.component.html',
  styleUrls: ['./freeze-account.component.css']
})
export class FreezeAccountComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
