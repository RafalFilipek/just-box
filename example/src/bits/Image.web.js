import React from 'react';
import { Box } from 'just-box'

export default ({ src, ...rest }) => (
  <Box as="img" src={src} {...rest}/>
);