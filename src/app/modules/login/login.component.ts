import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  formGroup: FormGroup; //Revisar form control

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      lobbyName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          this.customValidator()
        ],
      ],
    });
  }

  customValidator() {
    return (control: AbstractControl) => {
      const value = control.value || '';

      if (/[_.*#\/-]/.test(value)) {
        return { charError: 'No puede contener caracteres especiales como _,.*#/-' };
      }

      const numCount = (value.match(/\d/g) || []).length;
      if (numCount > 3) {
        return { lengthNumberError: 'No puede contener más de 3 números' };
      }

      if (/^\d+$/.test(value)) {
        return { onlyNumberError: 'No puede ser solo números' };
      }

      return null;
    };
  }


  onSubmit() {
    console.log(this.formGroup);
  }
}
