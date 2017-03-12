import React from 'react';
import Header from './BaseHeader.js';

export default (props) => (
  <Header style={styles.header}>
    {props.children}
  </Header>
)

const styles = {
  header: {
    background: `url("https://unsplash.it/1280/315?random")`,
    backgroundSize: 'cover'
  }
}
