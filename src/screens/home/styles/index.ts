import {StyleSheet} from 'react-native';
import normalize from '../../../utils/normalize';

export const styles = StyleSheet.create({
  wrapperList: {
    justifyContent: 'space-between',
    marginBottom: normalize(16),
  },
  list: {
    width:'90%',
    alignSelf:'center',
    marginTop: normalize(18),
    marginLeft: normalize(16),
    marginRight: normalize(16),
    flex: 1,
  },
});
