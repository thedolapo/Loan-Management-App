import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManagementComponent } from './account-management.component';
import { RouterModule } from '@angular/router';
import { AccountManagementHomeComponent } from './account-management-home/account-management-home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateBulkAccountComponent } from './create-bulk-account/create-bulk-account.component';
import { FreezeAccountComponent } from './freeze-account/freeze-account.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { DemoMaterialModule } from 'src/app/material-module';

const accountMgtRouter = [

{
  path:'',
  component:AccountManagementHomeComponent
},
{
  path:'create-account',
  component:CreateAccountComponent
},
{
  path:'create-bulk-account',
  component:CreateBulkAccountComponent
},
{
  path:'freeze-account',
  component:FreezeAccountComponent
},
{
  path:'transfer-funds',
  component:TransferFundsComponent
}
]


@NgModule({
  declarations: [AccountManagementComponent, AccountManagementHomeComponent, CreateAccountComponent, CreateBulkAccountComponent, FreezeAccountComponent, TransferFundsComponent],
  imports: [
    CommonModule,RouterModule.forChild(accountMgtRouter),NgbModule,FormsModule,ReactiveFormsModule,MatStepperModule,DemoMaterialModule
  ],

})
export class AccountManagementModule { }
