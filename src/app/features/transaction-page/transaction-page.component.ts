import { Component, OnInit,ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { GetDataService } from '../../services/get-data.service';
import { NgbdAlertCloseable}  from '../transaction-page/alert';
import { Alert } from '../transaction-page/alert'
import { from } from 'rxjs';
@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent implements OnInit {

  rows = [];
  temp = [];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  searchValue='';
  
  alerts: Alert[];

  

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  ColumnMode = ColumnMode

  constructor(private getdataservice: GetDataService) { }

  private loadTableData()
  {
    this.getdataservice.getData().subscribe(
      (data:[]) => {
        this.rows=data;
        this.temp = [...data];
        console.log(this.rows);
      }
    )
  }
 

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter((d)=> {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  ngOnInit() {
    this.loadTableData();
  }

}
