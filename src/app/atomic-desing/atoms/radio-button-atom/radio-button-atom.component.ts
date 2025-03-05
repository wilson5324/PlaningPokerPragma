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
  @Input() isEnabled: boolean = true;

  currentValue: string = "";
  private onChange = (value: any) => { };
  private onTouch = () => { };

  constructor() { }

  ngOnInit() {
    if (this.radioItems?.length) {
      this.currentValue = this.radioItems[0].value;
      this.onChange(this.currentValue); // 🔹 Notifica al formulario el valor inicial
    }
  }

  changeText($event: any): void {
    this.currentValue = $event.target.value;
    this.onChange(this.currentValue);
    this.onTouch();
  }

  writeValue(value: string): void {
    if (value) {
      this.currentValue = value;
    } else if (this.radioItems?.length) {
      this.currentValue = this.radioItems[0].value; //Usa la primera opción si no hay valor
    }
    this.onChange(this.currentValue); //Notifica al formulario
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}

