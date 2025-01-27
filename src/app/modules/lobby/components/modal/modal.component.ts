import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  radioItems = [{ label: "Jugador", value: "jugador" }, { label: "Espectador", value: "espectador" }];

  isLoading = false;
  customError = "";
  formGroup: FormGroup; //Revisar form control

  constructor(private fb: FormBuilder, private router: Router) {
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
    
    this.formGroup.get('playerName')?.statusChanges.subscribe(() => {
      console.log(this.formGroup);

      if (this.formGroup.get('playerName')?.errors) {
        this.customError = getErrorMessage(this.formGroup.controls['playerName'])

      }
    });
  }

  onSubmit() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.router.navigate(['Lobby']);
    }, 1000);
  }

}
