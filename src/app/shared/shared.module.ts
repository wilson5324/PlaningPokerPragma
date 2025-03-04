import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonAtomComponent } from '../atomic-desing/atoms/radio-button-atom/radio-button-atom.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from './components/card/card.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { InputAtomComponent } from '../atomic-desing/atoms/input-atom/input-atom.component';
import { ButtonAtomComponent } from '../atomic-desing/atoms/button-atom/button-atom.component';



@NgModule({
  declarations: [
    InputAtomComponent,
    ButtonAtomComponent,
    LoadingComponent,
    RadioButtonAtomComponent,
    CardComponent,
    UserIconComponent
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
    CardComponent,
    UserIconComponent
  ]
})
export class SharedModule { }
