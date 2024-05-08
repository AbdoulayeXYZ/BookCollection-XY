import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './components/portal/portal.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    PortalComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortalModule { }
