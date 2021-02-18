import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutViewComponent } from './features/layout-view/layout-view.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TransactionPageComponent } from './features/transaction-page/transaction-page.component';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { SettingsPageComponent } from './features/settings-page/settings-page.component';
import { LoginComponent } from './features/login/login.component';
import { AccountManagementComponent } from './features/account-management/account-management.component';
import { CardManagementComponent } from './features/card-management/card-management.component';
import { CustomerManagementComponent } from './features/customer-management/customer-management.component';
import { LoanApplicationComponent } from './features/loan-application/loan-application.component';


const routes: Routes = [



  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '',
    component: LayoutViewComponent,
    children: [

      {
        path: 'dashboard',
        component:DashboardComponent
},
//       {
//         path: 'transaction-page',
//         component:TransactionPageComponent
//       },
//       {
//         path: 'profile-page',
//         component:ProfilePageComponent
//     },
      {
        path: 'settings-page',
        component:SettingsPageComponent
      },
      {
        path: 'account-management',
        loadChildren:() => import('src/app/features/account-management/account-management.module').then(m=>m.AccountManagementModule)
      },
      {
        path: 'card-management',
        loadChildren:() => import('src/app/features/card-management/card-management.module').then(m=>m.CardManagementModule)
      },
      {
        path: 'customer-management',
        loadChildren:() => import('src/app/features/customer-management/customer-management.module').then(m => m.CustomerManagementModule)
      },
      {
        path: 'loan-application',
        loadChildren:() => import('src/app/features/loan-application/loan-application.module').then(m=>m.LoanApplicationModule)
      }
      
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
