import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LobbyDataService } from 'src/app/shared/services/lobby-data.service';

@Component({
  selector: 'user-icon-atom',
  templateUrl: './user-icon-atom.component.html',
  styleUrls: ['./user-icon-atom.component.sass']
})
export class UserIconAtomComponent {

  @Input({ required: true }) showLabel = false;

  shortName = "WI";
  name="Wilson"

  constructor(private lobbyData: LobbyDataService){

  }

  ngOnInit(): void {
    this.lobbyData.getNamePlayer();
  }


  updateShotName() {
    this.shortName = this.name.substring(0, 2).toUpperCase();
  }
}
