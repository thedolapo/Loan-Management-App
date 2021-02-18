import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagementComponent } from './customer-management.component';
import { RouterModule } from '@angular/router';
import { CustomerManagementHomeComponent } from './customer-management-home/customer-management-home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { DemoMaterialModule } from 'src/app/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const customerMgtRouter = [

{
  path:'',
  component:CustomerManagementHomeComponent
},
{
  path:'customer-details',
  component:CustomerDetailsComponent
},
{
  path:'transaction-history',
  component:TransactionHistoryComponent
}
]



@NgModule({
  declarations: [CustomerManagementComponent, CustomerManagementHomeComponent, CustomerDetailsComponent, TransactionHistoryComponent],
  imports: [
    CommonModule,RouterModule.forChild(customerMgtRouter),NgbModule,FormsModule,ReactiveFormsModule,MatStepperModule,DemoMaterialModule
  ]
})
export class CustomerManagementModule { }
