import { AbstractControl } from '@angular/forms'

export function dateValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  // Date rejex format (DD/MM/YYYY or DD-MM-YYYY)
  const valid = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(control.value)
  return valid
    ? null
    : { invalidDate: { valid: false, value: control.value } }
}
