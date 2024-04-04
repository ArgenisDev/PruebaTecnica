import {Alert, Linking} from 'react-native';
import {useEffect, useState} from 'react';
import {useCameraPermission, useCodeScanner} from 'react-native-vision-camera';

export const useGetCodeScanner = (arrayEan: string[] | undefined) => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [isBarCodeEnabled, setIsBarCodeEnabled] = useState<boolean>(true);
  const [ean, setEan] = useState<string>();
  const {requestPermission} = useCameraPermission();
  useEffect(() => {
    requestPermission().then(response => {
      !response && Linking.openSettings();
    });
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['ean-13', 'code-128', 'codabar', 'upc-e', 'qr', 'ean-8'],
    onCodeScanned: codes => {
      if (isBarCodeEnabled) {
        const isEan13 = codes[0].type === 'ean-13';
        setIsBarCodeEnabled(false);
        if (arrayEan?.includes(`${codes[0].value}`)) {
          Alert.alert('ERROR', 'Este Codigo ya esta registrado', [
            {
              text: 'OK',
              onPress: () => {
                setIsBarCodeEnabled(true);
              },
            },
          ]);
          return;
        }
        setEan(codes[0].value);
        if (isEan13) {
          setIsVisibleModal(true);
          return;
        }
        Alert.alert(
          'ERROR',
          'Solo es permitido codigo de barras en formato EAN-13',
          [
            {
              text: 'OK',
              onPress: () => {
                setIsBarCodeEnabled(true);
              },
            },
          ],
        );
      }
    },
  });
  return {isVisibleModal, codeScanner, ean};
};
