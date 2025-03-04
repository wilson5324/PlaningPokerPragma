import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LobbyDataService } from 'src/app/shared/services/lobby-data.service';
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
  formGroup: FormGroup; 

  constructor(private fb: FormBuilder, private router: Router, private lobbyData: LobbyDataService) {
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

  }

  onSubmit() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.lobbyData.setNameLobby(this.formGroup.get('lobbyName')?.value);
      this.router.navigate(['Lobby']);
    }, 1000);
  }
}
