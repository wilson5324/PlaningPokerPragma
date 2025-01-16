import { Component, Input } from '@angular/core';

@Component({
  selector: 'pg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input() textBtn!: string;;
  @Input() typeButton!: string;
  @Input() type!: string;
  @Input() isEnabled!: boolean;
}
