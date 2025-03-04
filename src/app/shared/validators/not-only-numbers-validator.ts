import { AbstractControl, ValidatorFn } from "@angular/forms";
import { parametersRegularExpressions } from "../constants/parameters-regular-expressions";

export function isOnlyNumbers(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const value = control.value || '';

        if (parametersRegularExpressions.onlyNumbers.test(value)) {
            return { onlyNumbers: true };
        }
        return null;
    };
}