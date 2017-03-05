// @flow

import { type UnitType, units } from './unit';
import { type MixedType } from './sharedTypes';

const unitless = [
  'aspectRatio',
  'flex',
  'lineHeight',
  'animationIterationCount',
  'boxFlex',
  'boxFlexGroup',
  'columnCount',
  'counterIncrement',
  'counterReset',
  'flex',
  'flexGrow',
  'flexPositive',
  'flexAhrink',
  'flexNegative',
  'fontWeight',
  'lineClamp',
  'lineHeight',
  'opacity',
  'order',
  'orphans',
  'tabSize',
  'widows',
  'zIndex',
  'zoom',
  'fillOpacity',
  'strokeDashoffset',
  'strokeOpacity',
  'strokeWidth',
];

export default (
  name: string,
  value: MixedType,
  baseSize: number,
  unit: UnitType,
  isReactNative: boolean
): string | number => {
  if (typeof value === 'object' && value.__unit) {
    if (value.unit === units.PX) {
      return isReactNative ? value.value : `${value.value}${value.unit}`;
    }
    if (value.unit === units.V) {
      return value.value;
    }
    if (value.unit === units.REM) {
      return isReactNative
        ? value.value * baseSize
        : `${value.value}${value.unit}`;
    }
  }

  if (unitless.indexOf(name) != -1 && typeof value === 'number') {
    return value;
  }

  if (typeof value === 'number') {
    if (unit === units.PX) {
      return isReactNative ? value : `${value}${units.PX}`;
    }

    if (unit === units.REM) {
      return isReactNative ? value * baseSize : `${value}${units.REM}`;
    }
  }

  return value.toString();
};
