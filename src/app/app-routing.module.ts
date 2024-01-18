import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { PasswordentryComponent } from './passwordentry/passwordentry.component';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';

const routes: Routes = [{
  path:'faq', component: FaqComponent
  
},
{
  path:'', component: PasswordpageComponent
},
{
  path:'passwordentry', component: PasswordentryComponent, 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
