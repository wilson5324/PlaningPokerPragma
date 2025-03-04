import { AbstractControl, ValidatorFn } from "@angular/forms";

export function isMoreXNumbers(maxNumbers: number): ValidatorFn {
    return (control: AbstractControl) => {
        const value = control.value || '';

        const numCount = (value.match(/\d/g) || []).length;
        if (numCount > maxNumbers) {
            return { maxNumbers: { maxNumbers: maxNumbers , actualNumbers: numCount} };
        }
        return null;
    };
}