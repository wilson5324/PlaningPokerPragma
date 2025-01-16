import { Component, forwardRef, Input, signal } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'input-atom',
  templateUrl: './input-atom.component.html',
  styleUrls: ['./input-atom.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAtomComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputAtomComponent),
      multi: true
    }
  ]
})
export class InputAtomComponent implements ControlValueAccessor, Validator {

  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() label?: string;

  /**
   * Deshabilitar el input
   */
  disabled = false;

  /**
   * Valor interno del control
   */
  private _value = '';

  /**
   * Señal para manejar el estado de error
   */
  hasError = signal(false);

  /**
   * Señal para manejar el mensaje de error
   */
  errorMessage = signal('');

  /**
   * Funciones que Angular inyecta para notificar cambios y "toque" del control
   */
  private onChange: (_: any) => void = () => { };
  private onTouched: () => void = () => { };

  /**
   * Se invoca cuando el valor en el control cambia
   */
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this._value = input.value;
    this.onChange(this._value);
  }

  /**
   * Se invoca cuando el control pierde el foco
   */
  onBlur(): void {
    this.onTouched();
  }

  /* ---------------------------------------------------
   * Métodos de ControlValueAccessor
   * ---------------------------------------------------
   */
  writeValue(value: any): void {
    this._value = value ?? '';
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Getter para exponer valor en la plantilla
   */
  get value(): string {
    return this._value;
  }

  /* ---------------------------------------------------
   * Métodos de Validator
   * ---------------------------------------------------
   */
  validate(control: AbstractControl): ValidationErrors | null {
    if (control?.errors) {
      this.hasError.set(true);
      this.errorMessage.set(this._getErrorMessage(control.errors));
      return control.errors;
    } else {
      this.hasError.set(false);
      this.errorMessage.set('');
      return null;
    }
  }

  private _getErrorMessage(errors: ValidationErrors): string {
    console.log(errors);
    
    if (errors['required']) {
      return 'Este campo es obligatorio.';
    }
    if (errors['email']) {
      return 'Ingrese un correo electrónico válido.';
    }
    // Extiende con otros tipos de validación
    return 'El valor es inválido.';
  }
}
