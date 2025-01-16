import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  form: FormGroup;
  public isLoading = false;

  // Señal para mensajes de error
  lobbyNameError$ = new BehaviorSubject<string | null>(null);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      lobbyName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          this.customValidator(),
        ],
      ],
    });

    this.setupValidationSignals();
  }

  setupValidationSignals(): void {
    const lobbyNameControl = this.form.get('lobbyName') as AbstractControl;

    if (lobbyNameControl) {
      combineLatest([
        lobbyNameControl.statusChanges,
        lobbyNameControl.valueChanges,
      ])
        .pipe(
          map(([status, value]) => {
            if (status === 'VALID') return null; // Sin errores

            if (lobbyNameControl.hasError('required')) {
              return 'El campo es obligatorio';
            }
            if (lobbyNameControl.hasError('minlength')) {
              const requiredLength = lobbyNameControl.getError('minlength')?.requiredLength;
              return `Debe tener al menos ${requiredLength} caracteres.`;
            }
            if (lobbyNameControl.hasError('maxlength')) {
              const requiredLength = lobbyNameControl.getError('maxlength')?.requiredLength;
              return `No puede tener más de ${requiredLength} caracteres.`;
            }
            if (lobbyNameControl.hasError('customError')) {
              return lobbyNameControl.getError('customError');
            }

            return null;
          })
        )
        .subscribe((error) => this.lobbyNameError$.next(error)); // Actualiza la señal de error
    }
  }

  customValidator() {
    return (control: AbstractControl) => {
      const value = control.value || '';

      if (/[_.*#\/-]/.test(value)) {
        return { customError: 'No puede contener caracteres especiales como _,.*#/-' };
      }

      const numCount = (value.match(/\d/g) || []).length;
      if (numCount > 3) {
        return { customError: 'No puede contener más de 3 números' };
      }

      if (/^\d+$/.test(value)) {
        return { customError: 'No puede ser solo números' };
      }

      return null;
    };
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario válido:', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}