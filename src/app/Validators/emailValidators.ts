import { AbstractControl } from '@angular/forms'

export function emailValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  // Date rejex format (DD/MM/YYYY or DD-MM-YYYY)
  const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value)
  return valid
    ? null
    : { invalidDate: { valid: false, value: control.value } }
}
