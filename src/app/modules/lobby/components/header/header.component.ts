import { Component } from '@angular/core';
import { LobbyDataService } from 'src/app/shared/services/lobby-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  nameLobby = "";
  namePlayer = "";

  constructor(private lobbyData: LobbyDataService) {

  }

  ngOnInit() {
    this.nameLobby = this.lobbyData.getNameLobby();
    this.lobbyData.getNamePlayer().subscribe((res)=>{
      this.namePlayer = res
      
    });
  }
}
