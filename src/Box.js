// @flow

import React, { PureComponent, PropTypes } from 'react';

import meaningfulCSSProps from './meaningfulCSSProps';
import { type UnitType, units } from './unit';
import getBoxPropGroups from './getPropGroups';
import isReactNative from './isReactNative';
import { type MixedType, type RenderFunc } from './sharedTypes';

export type BoxProps = {
  as?: string | RenderFunc,

  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline',
  aspectRatio?: number,
  borderBottomColor?: string,
  borderBottomLeftRadius?: MixedType,
  borderBottomRightRadius?: MixedType,
  borderBottomWidth?: MixedType,
  borderColor?: string,
  borderLeftColor?: string,
  borderLeftWidth?: MixedType,
  borderRadius?: MixedType,
  borderRightColor?: string,
  borderRightWidth?: MixedType,
  borderStyle?: 'solid' | 'dotted' | 'dashed',
  borderTopColor?: string,
  borderTopLeftRadius?: MixedType,
  borderTopRightRadius?: MixedType,
  borderTopWidth?: MixedType,
  borderWidth?: MixedType,
  bottom?: MixedType,
  display?:
    | 'none'
    | 'inline'
    | 'block'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid',
  flex?: number,
  flexBasis?: MixedType,
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  flexGrow?: number,
  flexShrink?: number,
  flexWrap?: 'wrap' | 'nowrap',
  height?: MixedType,
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around',
  left?: MixedType,
  margin?: MixedType,
  marginBottom?: MixedType,
  marginHorizontal?: MixedType,
  marginLeft?: MixedType,
  marginRight?: MixedType,
  marginTop?: MixedType,
  marginVertical?: MixedType,
  maxHeight?: MixedType,
  maxWidth?: MixedType,
  minHeight?: MixedType,
  minWidth?: MixedType,
  opacity?: number,
  overflow?: 'visible' | 'hidden' | 'scroll',
  padding?: MixedType,
  paddingBottom?: MixedType,
  paddingHorizontal?: MixedType,
  paddingLeft?: MixedType,
  paddingRight?: MixedType,
  paddingTop?: MixedType,
  paddingVertical?: MixedType,
  position?: 'absolute' | 'relative' | 'fixed' | 'sticky',
  right?: MixedType,
  top?: MixedType,
  width?: MixedType,
  zIndex?: number,

  children?: any,
  isotope?: string[],
  style?:  Object,
  isText?: boolean,
  innerRef?: Function,
};

type Context = {
  renderer: any,
  baseSize: number,
  unit: UnitType,
  defaultBoxStyles: { [key: string]: MixedType },
  box: string | RenderFunc,
  text: string | RenderFunc,
};

class Box extends PureComponent {
  props: BoxProps;

  render() {
    const { as, isText = false, innerRef, ...props } = this.props;
    const {
      renderer,
      baseSize,
      unit,
      defaultBoxStyles,
      box: Box,
    }: Context = this.context;

    const { styles, classProps, rest } = getBoxPropGroups(
      { ...(isText ? {} : defaultBoxStyles), ...props },
      baseSize,
      unit,
      meaningfulCSSProps,
      isReactNative
    );
    const styleProps = {};
    if (isReactNative) {
      styleProps.style = renderer.renderRule(() => ({
        ...classProps,
        ...styles,
      }));
    } else {
      styleProps.className = renderer.renderRule(() => classProps);
      styleProps.style = styles;
    }
    const Component = as || Box;

    return <Component ref={innerRef} {...styleProps} {...rest} />;
  }
}

Box.contextTypes = {
  renderer: PropTypes.object,
  baseSize: PropTypes.number,
  unit: PropTypes.oneOf(Object.values(units)),
  defaultBoxStyles: PropTypes.object,
  box: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default Box;
