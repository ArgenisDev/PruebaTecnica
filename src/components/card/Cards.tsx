import React from 'react';
import {Box, Text} from '../ui';
import normalize from '../../utils/normalize';
import Barcode from '@adrianso/react-native-barcode-builder';

interface CardProps {
  name: string;
  ean: string;
}
export const Cards = ({name, ean}: CardProps) => {
  return (
    <Box
      width={'48%'}
      height={normalize(120)}
      alignSelf="center"
      backgroundColor="hardWhite"
      borderRadius={10}
      justifyContent="space-around"
      alignItems="center"
      p="xs"
      shadowColor="black"
      shadowOffset={{
        width: 0,
        height: 1,
      }}
      shadowOpacity={0.22}
      shadowRadius={2.22}
      elevation={2}>
      <Text variant="cardTitle" numberOfLines={2}>
        {name}
      </Text>
      <Barcode
        value={`978020137962`}
        format="EAN13"
        flat
        style={{width: 100, height: 50}}
      />
      <Text variant="cardBody">{ean}</Text>
    </Box>
  );
};
