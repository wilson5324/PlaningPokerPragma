import { AbstractControl } from "@angular/forms";

//No usar camel case archivos
export function getErrorMessage(control: AbstractControl): string {
    const errors = control.errors;
    if (!errors) return "";

    const errorKey = Object.keys(errors)[0];

    switch (errorKey) {
        case 'minlength':
            return 'El mínimo de dígitos son ' + errors["minlength"].requiredLength;
        case 'maxlength':
            return 'El máximo de dígitos son ' + errors["maxlength"].requiredLength;
        case 'maxNumbers':
            return 'No pueden ser más de ' + errors["maxNumbers"].maxNumbers + ' números';
        case 'alphaNumeric':
            return 'No puede contener caracteres especiales';
        case 'onlyNumbers':
            return 'No pueden ser solo números';
        default:
            return "";
    }
}



