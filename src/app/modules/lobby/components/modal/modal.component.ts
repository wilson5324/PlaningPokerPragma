import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LobbyDataService } from 'src/app/shared/services/lobby-data.service';
import { getErrorMessage } from 'src/app/shared/validators/getErrors';
import { isMoreXNumbers } from 'src/app/shared/validators/not-more-x-numbers-validator';
import { isOnlyNumbers } from 'src/app/shared/validators/not-only-numbers-validator';
import { isAlphaNumeric } from 'src/app/shared/validators/special-chars-validator';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {
  @Output() isComplete = new EventEmitter<boolean>();
  radioItems = [{ label: "Jugador", value: "jugador" }, { label: "Espectador", value: "espectador" }];

  isLoading = false;
  customError = "";
  formGroup: FormGroup; //Revisar form control

  constructor(private fb: FormBuilder, private router: Router, private lobbyData: LobbyDataService) {
    this.formGroup = this.fb.group({
      playerName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          isAlphaNumeric(),
          isOnlyNumbers(),
          isMoreXNumbers(3)
        ],

      ],
      typeView: [
        '',
        [
          Validators.required
        ],

      ],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.lobbyData.setNamePlayer(this.formGroup.get('playerName')?.value);
    this.lobbyData.setIsSpectator(this.formGroup.get('typeView')?.value != "jugador");
    this.isComplete.emit(true);
  }

}
