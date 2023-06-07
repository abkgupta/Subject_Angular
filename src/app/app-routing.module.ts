import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';
import { SubjComponent } from './subj/subj.component';

const routes: Routes = [
  {
    path: 'sender',
    component: SenderComponent
  },
  {
    path: 'reciever',
    component:RecieverComponent
  },
  {
    path: 'subj',
    component:SubjComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
