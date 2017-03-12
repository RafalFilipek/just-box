import React from 'react';
import { Box, Text } from 'just-box';

export default (props) => (
  <Box {...props}>
    <Text
      padding={1}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
    >
      Unsplash It
    </Text>
  </Box>
)