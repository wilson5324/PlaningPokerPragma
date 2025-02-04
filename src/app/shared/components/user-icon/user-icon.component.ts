import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LobbyDataService } from '../../services/lobby-data.service';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.sass']
})
export class UserIconComponent {

  @Input() showLabel = false;

  shortName = "UK";
  name="Unknown"

  constructor(private lobbyData: LobbyDataService){

  }

  ngOnInit(): void {
    this.lobbyData.getNamePlayer().subscribe((res)=>{
      this.name = res
      this.updateShotName();
    })
  }


  updateShotName() {
    this.shortName = this.name.substring(0, 2).toUpperCase();
  }
}
