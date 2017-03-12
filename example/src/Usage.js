import React from 'react';
import { Box, FlexBox, Text, unit } from 'just-box';
import Image from './bits/Image';

export default (props) => (
  <Box padding={.5}>
    <Box>
      <Text fontSize={1.5}>Basic Usage</Text>
    </Box>
    <Box paddingVertical={1}>
      <Text>
        Just put your image size (width & height) after our URL and you'll get a placeholder.
      </Text>
    </Box>
    <Box style={ styles.code }>
      <Text>https://unsplash.it/200/300</Text>
    </Box>
    <FlexBox justifyCenter marginBottom={1} height={10}>
      <Image src="https://unsplash.it/300/200?image=101" />
    </FlexBox>
    <FlexBox justifyCenter marginBottom={1} height={10}>
      <Image src="https://unsplash.it/300/200?image=102" />
    </FlexBox>
    <FlexBox justifyCenter marginBottom={1} height={10}>
      <Image src="https://unsplash.it/300/200?image=103" />
    </FlexBox>
    <FlexBox justifyCenter marginBottom={1} height={10}>
      <Image src="https://unsplash.it/300/200?image=104" />
    </FlexBox>
    <FlexBox justifyCenter marginBottom={1} height={10}>
      <Image src="https://unsplash.it/300/200?image=107" />
    </FlexBox>
    <FlexBox justifyCenter marginBottom={1} height={10}>
      <Image src="https://unsplash.it/300/200?image=106" />
    </FlexBox>
  </Box>
)


const styles = {
  code: {
    borderWidth: unit(1).px,
    borderColor: '#eee',
    borderStyle: 'solid',
    padding: 1,
    marginVertical: 1
  }
}