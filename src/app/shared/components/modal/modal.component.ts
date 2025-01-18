import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {
  radioItems = [{label:"Jugador", value:"jugador"},{label:"Espectador", value:"espectador"}]

}
