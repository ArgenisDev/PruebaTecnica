import React from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {Box, Text} from '../../components/ui';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ModalAddProduct} from './components/modalAddToProduct';
import {useGetCodeScanner} from './hooks/useGetCodeScanner';
import {RootStackParamList} from '../../interfaces';
import {AddProductStrings} from './mocks';

export const AddProduct = () => {
  const device = useCameraDevice('back');
  const {params} = useRoute<RouteProp<RootStackParamList, 'AddProduct'>>();
  const {arrayEan} = params;
  const {codeScanner, isVisibleModal, ean} = useGetCodeScanner(arrayEan);
  if (device == null) return <></>;
  return (
    <Box flex={1} backgroundColor="blueLight">
      <Text variant="title" mt="xl">
        {AddProductStrings.TITLE}
      </Text>
      <Camera
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 100,
          position: 'absolute',
          zIndex: -1,
        }}
        device={device}
        codeScanner={codeScanner}
        isActive={true}
      />
      <ModalAddProduct isVisible={isVisibleModal} ean={ean} />
    </Box>
  );
};
