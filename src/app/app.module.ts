import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { InputAtomComponent } from './components/input-atom/input-atom.component';
import { ButtonAtomComponent } from './components/button-atom/button-atom.component';
import { RadioButtonAtomComponent } from './components/radio-button-atom/radio-button-atom.component';


@NgModule({
  declarations: [
    AppComponent,
    RadioButtonAtomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
