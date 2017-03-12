import React from 'react';
import { Image } from 'react-native';
import { Box } from 'just-box'

export default ({ src, ...rest }) => (
  <Box
    as={Image}
    source={{uri: src}}
    top={0}
    left={0}
    right={0}
    bottom={0}
    position="absolute"
    style={{ resizeMode: 'cover' }}
   {...rest}
  />
);