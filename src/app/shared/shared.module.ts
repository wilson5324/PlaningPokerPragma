import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonAtomComponent } from '../atomic-desing/atoms/radio-button-atom/radio-button-atom.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputAtomComponent } from '../atomic-desing/atoms/input-atom/input-atom.component';
import { ButtonAtomComponent } from '../atomic-desing/atoms/button-atom/button-atom.component';
import { UserIconAtomComponent } from '../atomic-desing/atoms/user-icon-atom/user-icon-atom.component';
import { CardAtomComponent } from '../atomic-desing/atoms/card-atom/card-atom.component';
import { TableAtomComponent } from '../atomic-desing/atoms/table-atom/table-atom.component';



@NgModule({
  declarations: [
    InputAtomComponent,
    ButtonAtomComponent,
    LoadingComponent,
    RadioButtonAtomComponent,
    UserIconAtomComponent,
    CardAtomComponent,
    TableAtomComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    InputAtomComponent,
    ButtonAtomComponent,
    LoadingComponent,
    RadioButtonAtomComponent,
    UserIconAtomComponent,
    CardAtomComponent,
    TableAtomComponent,
  ]
})
export class SharedModule { }
