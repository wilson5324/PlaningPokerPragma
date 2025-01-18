import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAtomComponent } from '../components/input-atom/input-atom.component';
import { ButtonAtomComponent } from '../components/button-atom/button-atom.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonAtomComponent } from '../components/radio-button-atom/radio-button-atom.component';



@NgModule({
  declarations: [
    InputAtomComponent,
    ButtonAtomComponent,
    LoadingComponent,
    ModalComponent,
    RadioButtonAtomComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    InputAtomComponent,
    ButtonAtomComponent,
    LoadingComponent,
    ModalComponent,
    RadioButtonAtomComponent
  ]
})
export class SharedModule { }
