import React from 'react';
import { Box } from 'just-box';
import { ScrollView } from 'react-native';

export default (props) => (
  <Box {...props} as={ScrollView} />
)