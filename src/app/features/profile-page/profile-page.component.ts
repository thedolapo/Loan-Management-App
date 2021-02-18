import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

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
