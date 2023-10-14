import {StyleSheet} from 'react-native';
import theme from '../../../../utils/theme';
import normalize from '../../../../utils/normalize';

export const styles = StyleSheet.create({
  input: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor:theme.colors.blueLight,
    marginTop: normalize(24),
    padding:normalize(16),
    fontFamily:'Poppins-SemiBold'
  },
});
