import {Alert, Modal, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Box, Text} from '../../../../components/ui';
import normalize from '../../../../utils/normalize';
import {styles} from './styles';
import theme from '../../../../utils/theme';
import {Button} from '../../../../components/button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {RootStackParamList} from '../../../../interfaces';
import {CheckAnimation} from '../checkAnimation/CheckAnimation';
import { AddProductStrings } from '../../mocks';
interface ModalAddProductProps {
  isVisible: boolean;
  ean: string | undefined;
}

export const ModalAddProduct = ({isVisible, ean}: ModalAddProductProps) => {
  const [nameProduct, setNameProduct] = useState<string>();
  const [saved, setSaved] = useState<boolean>(false);
  const {goBack, navigate} =
    useNavigation<NavigationProp<RootStackParamList>>();
  const saveChanges = () => {
    if (!nameProduct) {
      Alert.alert('Ingrese un nombre de producto');
      return;
    }
    firestore()
      .collection('products')
      .add({
        name: nameProduct,
        ean,
      })
      .then(() => {
        setSaved(true);
      })
      .catch(e => console.log(e));
  };
  const goToHome = () => navigate('Home');
  return (
    <Modal visible={isVisible} transparent>
      <Box
        position="absolute"
        top="20%"
        width={'100%'}
        height={'50%'}
        backgroundColor="white"
        borderRadius={normalize(20)}>
        <Text mt="xl" variant="body">
        {AddProductStrings.CODE_SCANNING}
        </Text>
        {!saved && (
          <Box>
            <TextInput
              placeholder={AddProductStrings.PRODUCT_NAME}
              placeholderTextColor={theme.colors.gray}
              onChangeText={e => setNameProduct(e)}
              style={styles.input}
            />
            <Box
              flexDirection="row"
              width={'90%'}
              alignSelf="center"
              justifyContent="space-around"
              mt="xl">
              <Button title={'Aceptar'} action={saveChanges} />
              <Button title={'Cancelar'} variant="secondary" action={goBack} />
            </Box>
          </Box>
        )}
        {saved && <CheckAnimation goBack={goToHome} />}
      </Box>
    </Modal>
  );
};
