import { AbstractControl, ValidatorFn } from "@angular/forms";
import { parametersConstant } from "../constants/parameters-constants";

export function isAlphaNumeric(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const value = control.value || '';

        if (parametersConstant.alphaNumeric.test(value)) {
            return { alphaNumeric: true };
        }
        return null;
    };
}