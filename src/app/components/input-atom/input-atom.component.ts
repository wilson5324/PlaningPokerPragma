import { Component, forwardRef, Input, signal } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'input-atom',
  templateUrl: './input-atom.component.html',
  styleUrls: ['./input-atom.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputAtomComponent),
    multi: true
  }]
})
export class InputAtomComponent implements ControlValueAccessor {

  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() label?: string;
  @Input() minLength?: number;
  @Input() maxLength?: number;


  isDisable!: boolean;
  currentValue = "";

  private onChange = (_: any) => { };
  private onTouch = () => { };

  changeText($event: any): void {
    this.onChange($event.target.value)
  }

  writeValue(value: string): void {
    this.currentValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled

  }

}
