import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { InputComponent } from 'src/app/shared/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/button/button.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoadingComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
