import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {
  useIsFocused,
} from '@react-navigation/native';

export const useGetProductList = () => {
  const [data, setData] = useState<FirebaseFirestoreTypes.DocumentData[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const getUsers = async () => {
    setLoading(true);
    const usersCollection = await firestore().collection('products').get();
    const dataFormatted = usersCollection.docs.map(item => item.data());
    setData(dataFormatted);
    setLoading(false);
  };
  const arrayEan: string[] | undefined = data?.map(item => item.ean as string);
  useEffect(() => {
    getUsers();
  }, [isFocused]);
  return {data, loading, arrayEan};
};
