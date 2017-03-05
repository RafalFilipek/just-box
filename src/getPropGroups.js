// @flow

import { type UnitElement, type UnitType } from './unit';
import process from './processPlatformStyles';
import toUnit from './toUnit';

export type MixedType = string | number | UnitElement;

type BoxPropGroupsType = {
  classProps: { [key: string]: MixedType },
  styles: { [key: string]: MixedType },
  rest: { [key: string]: any },
};

type PropsType = {
  isotope: string[],
  style: { [key: string]: MixedType },
};

type PropCollectionType = { name: string, value: MixedType }[];

const getBoxPropGroups = (
  { isotope = [], style = {}, ...props }: PropsType,
  baseSize: number,
  unit: UnitType,
  cssProps: string[],
  isReactNative: boolean
): BoxPropGroupsType => {
  const allPosibleStyles = { ...props, ...style };

  const addToMemo = (name, value, memo) => {
    if (value === undefined || value === null) {
      return memo;
    }
    const isIsotope: boolean = isotope.indexOf(name) !== -1;
    const isCSS: boolean = cssProps.indexOf(name) !== -1 ||
      style[name] !== undefined;

    if (isIsotope || isCSS) {
      if (Array.isArray(value)) {
        value.forEach(el => {
          memo = addToMemo(el.name, el.value, memo);
        });
        return memo;
      }
      if (isIsotope) {
        memo.styles[name] = toUnit(name, value, baseSize, unit, isReactNative);
      } else if (isCSS) {
        memo.classProps[name] = toUnit(
          name,
          value,
          baseSize,
          unit,
          isReactNative
        );
      }
    } else if (style[name] === undefined) {
      memo.rest[name] = value;
    }
    return memo;
  };

  const { classProps, styles, rest } = Object.keys(allPosibleStyles).reduce(
    (memo, name: string): BoxPropGroupsType => {
      const value: ?(MixedType | PropCollectionType) = process(
        name,
        allPosibleStyles[name],
        isReactNative
      );
      return addToMemo(name, value, memo);
    },
    { classProps: {}, styles: {}, rest: {} }
  );

  return {
    classProps,
    styles,
    rest,
  };
};

export default getBoxPropGroups;
