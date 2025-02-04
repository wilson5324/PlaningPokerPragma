import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.sass']
})
export class UserIconComponent {

  @Input() name = "Unknown";

  shortName = "UK";

  ngOnInit(): void {
    this.shortName = this.name.substring(0, 2).toUpperCase();
  }

}
