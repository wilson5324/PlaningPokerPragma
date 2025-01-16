import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-atom',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() minLength?: number;
  @Input() maxLength?: number;

  @Input() errorMessage: string | null = null; 

  value: string = '';
  touched: boolean = false;

  onChange: (value: string) => void = () => { };
  onTouchedCallback: () => void = () => { };

  get showError(): boolean {
    return this.touched && !!this.errorMessage;
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value); // Propaga cambios al modelo
  }

  handleBlur(): void {
    this.touched = true;
    this.onTouchedCallback(); // Marca el control como "tocado"
  }
}