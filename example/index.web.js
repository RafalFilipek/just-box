// @flow

import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { ConfigBox } from 'just-box';
import renderer from 'just-box/lib/webRenderer';

import Container from './src/Container';
import Header from './src/Header';
import Logo from './src/Logo';
import Info from './src/Info';
import Usage from './src/Usage';

export default class App extends PureComponent {
  render() {
    return (
      <ConfigBox
        unit="rem"
        baseSize={16}
        box="div"
        text="span"
        renderer={renderer}
      >
        <Container>
          <Header>
            <Logo />
          </Header>
          <Info />
          <Usage />
        </Container>
      </ConfigBox>
    )
  }
}

const el = document.querySelector('#app');
render(<App />, el);