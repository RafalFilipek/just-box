import React, { Component } from 'react';
import { ConfigBox } from 'just-box';
import renderer from 'just-box/lib/nativeRenderer';
import { AppRegistry, Text, View } from 'react-native';

import Container from './src/Container';
import Header from './src/Header';
import Logo from './src/Logo';
import Info from './src/Info';
import Usage from './src/Usage';

export default class Example extends Component {
  render() {
    return (
      <ConfigBox
        unit="rem"
        baseSize={16}
        box={View}
        text={Text}
        renderer={renderer}
      >
        <Container marginTop={2}>
          <Header>
            <Logo />
          </Header>
          <Info />
          <Usage />
        </Container>
      </ConfigBox>
    );
  }
}

AppRegistry.registerComponent('example', () => Example);
