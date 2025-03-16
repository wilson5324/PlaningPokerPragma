import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-atom',
  templateUrl: './card-atom.component.html',
  styleUrls: ['./card-atom.component.sass']
})
export class CardAtomComponent {
  @Input() typeCard= "card--selected";
  @Input() name!: string;
  @Input() value!: string;

}
