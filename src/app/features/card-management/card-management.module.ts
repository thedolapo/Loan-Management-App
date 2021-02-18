import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardManagementComponent } from './card-management.component';
import { RouterModule } from '@angular/router';
import { CardManagementHomeComponent } from './card-management-home/card-management-home.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { CreateBulkCardComponent } from './create-bulk-card/create-bulk-card.component';
import { FreezeCardComponent } from './freeze-card/freeze-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { DemoMaterialModule } from 'src/app/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const cardMgtRouter = [

{
  path:'',
  component:CardManagementHomeComponent
},
{
  path:'create-bulk-card',
  component:CreateBulkCardComponent
},
{
  path:'create-card',
  component:CreateCardComponent
},
{
  path:'freeze-card',
  component:FreezeCardComponent
}
]



@NgModule({
  declarations: [CardManagementComponent, CardManagementHomeComponent, CreateCardComponent, CreateBulkCardComponent, FreezeCardComponent],
  imports: [
    CommonModule,RouterModule.forChild(cardMgtRouter),NgbModule,FormsModule,ReactiveFormsModule,MatStepperModule,DemoMaterialModule
  ]
})
export class CardManagementModule { }
