import {createTheme} from '@shopify/restyle';
import normalize from './normalize';

const palette = {
  blueLight: '#3D9EDD',
  hardWhite: '#fff',
  hardBlack: '#000',
  black: '#0B0B0B',
  white: '#F0F2F3',
  gray: '#d3d3d3',
  red: '#f44747',
  grayHard:'#404258',
  green:'#82CD47'
};

const theme = createTheme({
  colors: {
    blueLight: palette.blueLight,
    black: palette.black,
    hardBlack: palette.hardBlack,
    hardWhite: palette.hardWhite,
    white: palette.white,
    gray: palette.gray,
    red: palette.red,
    grayHard:palette.grayHard,
    green: palette.green
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title: {
      fontSize: normalize(24),
      fontFamily: 'Poppins-Bold',
      textAlign: 'center',
      color: 'hardWhite',
      textShadowColor: 'black',
      textShadowOffset: {width: 3, height: 3},
      textShadowRadius: 10,
    },
    cardTitle: {
      fontSize: normalize(13),
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
    },
    cardBody: {
      fontSize: normalize(11),
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
    },
    body: {
      fontSize: normalize(18),
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
    },
    defaults: {
      fontSize: normalize(18),
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
    },
  },
});

export type Theme = typeof theme;
export default theme;
