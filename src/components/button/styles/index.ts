import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme';
import normalize from '../../../utils/normalize';

export const styles = StyleSheet.create({
  button: {
    width:'45%',
    borderRadius: 10,
    backgroundColor: theme.colors.blueLight,
    padding: normalize(8),
  },
  buttonSecondary: {
    width:'45%',
    borderRadius: 10,
    backgroundColor: theme.colors.red,
    padding: normalize(8),
  },
});
