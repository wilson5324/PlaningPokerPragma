import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputAtomComponent } from './components/input-atom/input-atom.component';
import { ButtonAtomComponent } from './components/button-atom/button-atom.component';
import { LoadingComponent } from './shared/components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    InputAtomComponent,
    ButtonAtomComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
