import {createTheme} from '@shopify/restyle';
import {RFPercentage} from 'react-native-responsive-fontsize';

import {
  // spacing
  NEGATIVE,
  XXS,
  XS,
  S,
  M,
  L,
  XL,

  // colors
  DARK,
  LIGHT,
  GREY1,
  GREY2,
  PRIMARY,

  // fonts
  H1,
  H2,
  H3,
  BODY_L,
  BODY_M,
  BODY_S,
} from '@src/utils/constants';

const palette = {
  dark: DARK,
  light: LIGHT,
  grey1: GREY1,
  grey2: GREY2,
  primary: PRIMARY,
};

export const primaryTheme = createTheme({
  colors: {
    dark: palette.dark,
    light: palette.light,
    grey1: palette.grey1,
    grey2: palette.grey2,
    primary: palette.primary,
  },
  spacing: {
    xxs: XXS,
    xs: XS,
    s: S,
    m: M,
    l: L,
    xl: XL,

    '-xxs': XXS * NEGATIVE,
    '-xs': XS * NEGATIVE,
    '-s': S * NEGATIVE,
    '-m': M * NEGATIVE,
    '-l': L * NEGATIVE,
    '-xl': XL * NEGATIVE,
  },
  textVariants: {
    h1: {
      fontSize: H1,
    },
    h2: {
      fontSize: H2,
    },
    h3: {
      fontSize: H3,
    },
    bodyL: {
      fontSize: BODY_L,
    },
    bodyM: {
      fontSize: BODY_M,
    },
    bodyS: {
      fontSize: BODY_S,
    },
  },
  breakpoints: {},
  zIndices: {},
  borderRadii: {
    full: RFPercentage(50),
  },
});

export type Theme = typeof primaryTheme;
