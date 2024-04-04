import React from 'react';
import {Box, Text} from '../../../../components/ui';
import {HomeScreenStrings} from '../../mocks';
import normalize from '../../../../utils/normalize';

export const Header = () => {
  return (
    <Box
      backgroundColor="blueLight"
      width={'100%'}
      borderBottomEndRadius={normalize(100)}
      pb="l">
      <Text variant="title">{HomeScreenStrings.TITLE}</Text>
    </Box>
  );
};
