import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getErrorMessage } from 'src/app/shared/validators/getErrors';
import { isMoreXNumbers } from 'src/app/shared/validators/not-more-x-numbers-validator';
import { isOnlyNumbers } from 'src/app/shared/validators/not-only-numbers-validator';
import { isAlphaNumeric } from 'src/app/shared/validators/special-chars-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  customError = "";
  formGroup: FormGroup; //Revisar form control

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({
      lobbyName: [
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
    });
  }

  ngOnInit(): void {
    this.formGroup.get('lobbyName')?.statusChanges.subscribe(() => {
      if (this.formGroup.get('lobbyName')?.errors) {
        this.customError = getErrorMessage(this.formGroup.controls['lobbyName'])

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
