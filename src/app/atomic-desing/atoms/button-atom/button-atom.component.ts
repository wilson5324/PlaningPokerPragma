import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-atom',
  templateUrl: './button-atom.component.html',
  styleUrls: ['./button-atom.component.sass']
})
export class ButtonAtomComponent {
  @Input({ required: true }) textBtn!: string;
  @Input() typeButton = "button--primary";
  @Input() type = "button";
  @Input() isDisabled = false;
}
