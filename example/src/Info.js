import React from 'react';
import { FlexBox, Text, unit } from 'just-box';

export default (props) => (
  <FlexBox
    borderWidth={0}
    borderBottomWidth={unit(1).px}
    borderBottomColor="#eee"
    borderStyle="solid"
    {...props}
    row
  >
    <FlexBox column f1 alignCenter padding={1}>
      <Text fontSize={0.8}>1,013</Text>
      <Text fontSize={0.8}>Images</Text>
    </FlexBox>
    <FlexBox column f1 alignCenter padding={1}>
      <Text fontSize={0.8}>773,048,099</Text>
      <Text fontSize={0.8}>Images Served</Text>
    </FlexBox>
    <FlexBox column f1 alignCenter padding={1}>
      <Text fontSize={0.8}>32,614+ GB</Text>
      <Text fontSize={0.8}>Bandwidth</Text>
    </FlexBox>
  </FlexBox>
)
