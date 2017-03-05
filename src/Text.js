// @flow

import React, { PropTypes } from 'react';

import { type UnitType, units } from './unit';
import Box, { type BoxProps } from './Box';
import { type MixedType, type RenderFunc } from './sharedTypes';

export type TextProps = BoxProps & {
  as?: string | RenderFunc,
  fontFamily?: string,
  fontSize?: MixedType,
  fontStyle?: 'normal' | 'italic',
  fontWeight?: number | string,
  textAlign?: 'left' | 'right' | 'center' | 'justify',
  color?: string,
  textDecoration?: 'none' | 'underline' | 'line-through',
  lineHeight?: number,
};

type Context = {
  renderer: any,
  baseSize: number,
  unit: UnitType,
  defaultTextStyles: { [key: string]: MixedType },
  text: string | RenderFunc,
};

const Text = (
  { as, style, ...props }: TextProps,
  { text: Text, defaultTextStyles }: Context
) => {
  const Component = as || Text;
  return (
    <Box
      as={Component}
      style={{ ...defaultTextStyles, ...style }}
      {...props}
      isText={true}
    />
  );
};

Text.contextTypes = {
  baseSize: PropTypes.number,
  unit: PropTypes.oneOf(Object.values(units)),
  defaultTextStyles: PropTypes.object,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default Text;
