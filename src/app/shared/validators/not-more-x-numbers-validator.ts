import { AbstractControl, ValidatorFn } from "@angular/forms";
import { parametersConstant } from "../constants/parameters-constants";

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