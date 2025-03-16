import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PlanningTableComponent } from './components/planning-table/planning-table.component';
import { DeckCardsComponent } from './components/deck-cards/deck-cards.component';


@NgModule({
  declarations: [
    LobbyComponent,
    ModalComponent,
    PlanningTableComponent,
    HeaderComponent,
    DeckCardsComponent,
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class LobbyModule { }
