import { Component } from '@angular/core';
import { LobbyDataService } from 'src/app/shared/services/lobby-data.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.sass']
})
export class LobbyComponent {
  isModalOpen = true;


  isModalComplete(event: boolean) {
    this.isModalOpen=!event;
  }
}
