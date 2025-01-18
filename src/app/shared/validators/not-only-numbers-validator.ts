import { AbstractControl, ValidatorFn } from "@angular/forms";
import { parametersConstant } from "../constants/parameters-constants";

export function isOnlyNumbers(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const value = control.value || '';

        if (parametersConstant.onlyNumbers.test(value)) {
            return { onlyNumbers: true };
        }
        return null;
    };
}