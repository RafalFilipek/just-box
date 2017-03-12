import React from 'react';
import { FlexBox } from 'just-box';

export default (props) => (
  <FlexBox
    height={10}
    column
    justifyCenter
    alignCenter
    {...props}
  />
)

