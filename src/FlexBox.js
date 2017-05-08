// @flow

import React from 'react';
import omit from 'lodash/omit';

import Box, { type BoxProps } from './Box';
import isReactNative from './isReactNative';

type FlexProps = {
  f1?: boolean,
  f2?: boolean,
  f3?: boolean,
  f4?: boolean,
  row?: boolean,
  column?: boolean,
  wrap?: boolean,
  alignStart?: boolean,
  alignEnd?: boolean,
  alignCenter?: boolean,
  alignBaseline?: boolean,
  alignStretch?: boolean,
  selfStart?: boolean,
  selfEnd?: boolean,
  selfCenter?: boolean,
  selfBaseline?: boolean,
  selfStretch?: boolean,
  justifyStart?: boolean,
  justifyEnd?: boolean,
  justifyCenter?: boolean,
  justifyBetween?: boolean,
  justifyAround?: boolean,
  contentStart?: boolean,
  contentEnd?: boolean,
  contentCenter?: boolean,
  contentBetween?: boolean,
  contentAround?: boolean,
  contentStretch?: boolean,
};

const flexMap = {
  f1: { name: 'flex', value: 1 },
  f2: { name: 'flex', value: 2 },
  f3: { name: 'flex', value: 3 },
  f4: { name: 'flex', value: 4 },
  row: { name: 'flexDirection', value: 'row' },
  column: { name: 'flexDirection', value: 'column' },
  wrap: { name: 'flexWrap', value: 'wrap' },
  alignStart: { name: 'alignItems', value: 'flex-start' },
  alignEnd: { name: 'alignItems', value: 'flex-end' },
  alignCenter: { name: 'alignItems', value: 'center' },
  alignBaseline: { name: 'alignItems', value: 'baseline' },
  alignStretch: { name: 'alignItems', value: 'stretch' },
  selfStart: { name: 'alignSelf', value: 'flex-start' },
  selfEnd: { name: 'alignSelf', value: 'flex-end' },
  selfCenter: { name: 'alignSelf', value: 'center' },
  selfBaseline: { name: 'alignSelf', value: 'baseline' },
  selfStretch: { name: 'alignSelf', value: 'stretch' },
  justifyStart: { name: 'justifyContent', value: 'flex-start' },
  justifyEnd: { name: 'justifyContent', value: 'flex-end' },
  justifyCenter: { name: 'justifyContent', value: 'center' },
  justifyBetween: { name: 'justifyContent', value: 'space-between' },
  justifyAround: { name: 'justifyContent', value: 'space-around' },
  contentStart: { name: 'justifyContent', value: 'flex-end' },
  contentEnd: { name: 'alignContent', value: 'flex-start' },
  contentCenter: { name: 'alignContent', value: 'center' },
  contentBetween: { name: 'alignContent', value: 'flex-end' },
  contentAround: { name: 'alignContent', value: 'space-around' },
  contentStretch: { name: 'alignContent', value: 'stretch' },
};

const flexKeys = Object.keys(flexMap);

type FlexBoxProps = FlexProps & BoxProps;

const FlexBox = (props: FlexBoxProps) => {
  const flex = Object.keys(props).reduce((memo, name) => {
    const el = flexMap[name];
    if (el) {
      memo[el.name] = el.value;
    }
    return memo;
  }, {});
  const additionalStyles = isReactNative ? {} : { display: 'flex' };

  return <Box {...additionalStyles} {...flex} {...omit(props, flexKeys)} />;
};
FlexBox.displayName = 'Flex(Box)';

export default FlexBox;
