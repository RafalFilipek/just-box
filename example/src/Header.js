import React from 'react';
import Image from './bits/Image';
import Header from './BaseHeader.js';

export default (props) => (
  <Header>
    <Image src="https://unsplash.it/1280/315?random" />
    {props.children}
  </Header>
)
