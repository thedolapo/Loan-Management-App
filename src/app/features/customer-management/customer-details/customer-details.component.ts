import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public view:boolean=false

  searchValue='';

  toggle()
  {
    this.view=!this.view;
  }
  constructor() { }

  ngOnInit() {
  }

}
