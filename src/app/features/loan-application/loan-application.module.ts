import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanApplicationComponent } from './loan-application.component';
import { RouterModule } from '@angular/router';
import { LoanApplicationHomeComponent } from './loan-application-home/loan-application-home.component';
import { LoanDisbursementReportsComponent } from './loan-disbursement-reports/loan-disbursement-reports.component';
import { LoanTransactionHistoryComponent } from './loan-transaction-history/loan-transaction-history.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { DemoMaterialModule } from 'src/app/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const loanApplicationRouter = [

{
  path:'',
  component:LoanApplicationHomeComponent
},
{
  path:'loan-transaction-history',
  component:LoanTransactionHistoryComponent
},
{
  path:'loan-disbursement-reports',
  component:LoanDisbursementReportsComponent
}
]




@NgModule({
  declarations: [LoanApplicationComponent, LoanApplicationHomeComponent, LoanDisbursementReportsComponent, LoanTransactionHistoryComponent],
  imports: [
    CommonModule,RouterModule.forChild(loanApplicationRouter),NgbModule,FormsModule,ReactiveFormsModule,MatStepperModule,DemoMaterialModule
  ]
})
export class LoanApplicationModule { }
