import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-atom',
  templateUrl: './button-atom.component.html',
  styleUrls: ['./button-atom.component.sass']
})
export class ButtonAtomComponent {
  @Input() textBtn!: string;;
  @Input() typeButton!: string;
  @Input() type!: string;
  @Input() isEnabled!: boolean;

}
