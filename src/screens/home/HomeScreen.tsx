import {ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {Box, Text} from '../../components/ui';
import {Cards} from '../../components/card/Cards';
import {styles} from './styles';
import {useGetProductList} from './hooks/useGetProductList';

import {Header} from './components/header';
import {Footer} from './components/footer';
import theme from '../../utils/theme';
import { HomeScreenStrings } from './mocks';

export const HomeScreen = () => {
  const {data, loading, arrayEan} = useGetProductList();
  const emptyList = data?.length ? data : [];
  return (
    <Box
      alignItems="center"
      flex={1}
      backgroundColor="white"
      justifyContent="center">
      <Header />
      {loading && (
        <ActivityIndicator
          size="large"
          color={theme.colors.blueLight}
          style={{flex: 1}}
        />
      )}
      {!loading && (
        <FlatList
          data={emptyList ?? data}
          numColumns={2}
          renderItem={({item}) => <Cards name={item.name} ean={item.ean} />}
          keyExtractor={item => `${item.ean}`}
          ListEmptyComponent={()=><Text variant='body'>{HomeScreenStrings.EMPTY_LIST}</Text>}
          columnWrapperStyle={styles.wrapperList}
          style={styles.list}
        />
      )}
      {!loading && <Footer  arrayEan={arrayEan}/>}
    </Box>
  );
};
