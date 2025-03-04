import { AbstractControl, ValidatorFn } from "@angular/forms";
import { parametersRegularExpressions } from "../constants/parameters-regular-expressions";

export function isAlphaNumeric(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const value = control.value || '';

        if (parametersRegularExpressions.alphaNumeric.test(value)) {
            return { alphaNumeric: true };
        }
        return null;
    };
}