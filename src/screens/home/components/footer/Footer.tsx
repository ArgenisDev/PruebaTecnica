import React from 'react';
import {Box} from '../../../../components/ui';
import normalize from '../../../../utils/normalize';
import {Plus} from 'phosphor-react-native';
import theme from '../../../../utils/theme';
import {TouchableWithoutFeedback} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../interfaces';

interface FooterProps {
  arrayEan: string[] | undefined;
}
export const Footer = ({arrayEan}: FooterProps) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const goToAddProduct = () => navigate('AddProduct', {arrayEan});
  return (
    <Box
      backgroundColor="blueLight"
      width={'100%'}
      borderTopStartRadius={normalize(100)}
      pt="xl">
      <TouchableWithoutFeedback onPress={goToAddProduct}>
        <Box
          alignSelf="center"
          position="absolute"
          top={normalize(-30)}
          backgroundColor="white"
          borderRadius={100}
          width={normalize(60)}
          height={normalize(60)}
          justifyContent="center"
          alignItems="center"
          shadowColor="black"
          shadowOffset={{
            width: 0,
            height: 2,
          }}
          shadowOpacity={0.25}
          shadowRadius={3.84}
          elevation={5}>
          <Plus color={theme.colors.black} size={normalize(30)} />
        </Box>
      </TouchableWithoutFeedback>
    </Box>
  );
};
