// @flow

export const units = {
  PX: 'px',
  REM: 'rem',
  V: '',
};

export type UnitType = 'px' | 'rem';

export type UnitElement = {
  value: number,
  unit: UnitType,
  __unit: true,
};

export class Unit {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  get px(): UnitElement {
    return { value: this.value, unit: units.PX, __unit: true };
  }
  get rem(): UnitElement {
    return { value: this.value, unit: units.REM, __unit: true };
  }
  get v(): any {
    return { value: this.value, unit: units.V, __unit: true };
  }
  toString(): string {
    return this.value.toString();
  }
  toNumber(): number {
    return parseFloat(this.value);
  }
}

const unit = (value: number): Unit => new Unit(value);

export default unit;
