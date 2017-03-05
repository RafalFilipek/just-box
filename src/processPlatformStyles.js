// @flow

import { type MixedType } from './sharedTypes';

type ReturnType = MixedType | Array<Object> | void;

type ModifierValueFuncType = (value: MixedType) => ReturnType;

const nope: ModifierValueFuncType = () => undefined;

type Modifiers = {
  [key: string]: {
    web?: ModifierValueFuncType,
    native?: ModifierValueFuncType,
  },
};

const modifiers: Modifiers = {
  aspectRatio: {
    web: nope,
  },
  alignContent: {
    native: nope,
  },
  marginHorizontal: {
    web: value => [
      { name: 'marginLeft', value },
      { name: 'marginRight', value },
    ],
  },
  marginVertical: {
    web: value => [
      { name: 'marginTop', value },
      { name: 'marginBottom', value },
    ],
  },
  paddingHorizontal: {
    web: value => [
      { name: 'paddingLeft', value },
      { name: 'paddingRight', value },
    ],
  },
  paddingVertical: {
    web: value => [
      { name: 'paddingTop', value },
      { name: 'paddingBottom', value },
    ],
  },
  textDecorationLine: {
    web: nope,
  },
  textDecorationColor: {
    web: nope,
  },
  textDecorationStyle: {
    web: nope,
  },
  textDecoration: {
    native: nope,
  },
  textShadowColor: {
    web: nope,
  },
  textShadowOffset: {
    web: nope,
  },
  textShadowRadius: {
    web: nope,
  },
  textShadow: {
    native: nope,
  },
  includeFontPadding: {
    web: nope,
  },
  writingDirection: {
    web: nope,
  },
  display: {
    native: nope,
  },
};

type ProcesFuncType = (name: string, value: MixedType) => ReturnType;

const process: ProcesFuncType = (name, value, isReactNative) => {
  const mod = modifiers[name] &&
    modifiers[name][isReactNative ? 'native' : 'web'];
  if (!mod) {
    return value;
  }
  return mod(value);
};

export default process;
