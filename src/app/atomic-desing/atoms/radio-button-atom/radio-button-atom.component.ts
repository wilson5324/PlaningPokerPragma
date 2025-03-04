import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'radio-button-atom',
  templateUrl: './radio-button-atom.component.html',
  styleUrls: ['./radio-button-atom.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonAtomComponent),
    multi: true
  }]
})

export class RadioButtonAtomComponent implements ControlValueAccessor {
  @Input() radioItems!: { label: string, value: string }[];
  @Input() radioName!: string;
  @Input() columns!: string;
  @Input() isEnabled!: boolean;

  constructor() {
  }


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

