// @flow

import React, { PureComponent, PropTypes } from 'react';
import { Provider } from 'react-fela';

import { units, type UnitType } from './unit';
import { type MixedType, type RenderFunc } from './sharedTypes';
import defaultFelaRenderer from './defaultFelaRenderer';
import defaultFelaMountPoinProvider from './defaultFelaMountPoinProvider';

type Props = {
  baseSize: number,
  unit: UnitType,
  children?: React.Element<*>,
  defaultBoxStyles?: { [key: string]: MixedType },
  defaultTextStyles?: { [key: string]: MixedType },
  box: string | RenderFunc,
  text: string | RenderFunc,
  felaRenderer?: any,
  getFelaMountNode: () => HTMLElement,
};

export default class ConfigBox extends PureComponent {
  props: Props;

  static childContextTypes = {
    unit: PropTypes.oneOf(Object.values(units)),
    baseSize: PropTypes.number,
    defaultBoxStyles: PropTypes.object,
    defaultTextStyles: PropTypes.object,
    box: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    defaultBoxStyles: {},
    defaultTextStyles: {},
    baseSize: 16,
    unit: units.REM,
    felaRenderer: defaultFelaRenderer,
    getFelaMountNode: defaultFelaMountPoinProvider,
  };

  getChildContext() {
    return {
      baseSize: this.props.baseSize,
      unit: this.props.unit,
      defaultBoxStyles: this.props.defaultBoxStyles,
      defaultTextStyles: this.props.defaultTextStyles,
      box: this.props.box,
      text: this.props.text,
    };
  }

  render() {
    return (
      <Provider
        renderer={this.props.felaRenderer}
        mountNode={this.props.getFelaMountNode()}
      >
        {this.props.children}
      </Provider>
    );
  }
}
