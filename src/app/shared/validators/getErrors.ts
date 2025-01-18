import { AbstractControl } from "@angular/forms";

export function getErrorMessage(control: AbstractControl): string {
    if (control.hasError('minlength')) {
        return 'El mínimo de digitos son ' + control.errors?.["minlength"].requiredLength;
    } else if (control.hasError('maxlength')) {
        return 'El maximo de digitos son ' + control.errors?.["maxlength"].requiredLength;
    }
    else if (control.hasError('maxNumbers')) {
        return 'No pueden ser mas de ' + control.errors?.["maxNumbers"].maxNumbers + " numeros";
    }
    else if (control.hasError('alphaNumeric')) {
        return 'No puede contener caracteres especiales';
    }
    else if (control.hasError('onlyNumbers')) {
        return 'No pueden ser solo numeros';
    }
    return "";
}


