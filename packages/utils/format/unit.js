import { isDef } from '../index'
import { isNumeric } from '../validate/number'

export function addUnit(value) {
  if (!isDef) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}
