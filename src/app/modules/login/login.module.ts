import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { InputAtomComponent } from 'src/app/components/input-atom/input-atom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonAtomComponent } from 'src/app/components/button-atom/button-atom.component';


@NgModule({
  declarations: [
    LoginComponent,
    InputAtomComponent,
    ButtonAtomComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
