import {createTheme} from '@shopify/restyle';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

import {
  // spacing
  NEGATIVE,
  XXS,
  XS,
  S,
  M,
  L,
  XL,
  XL6,
  XL8,
  XL9,
  XL12,

  // colors
  ALT,
  DARK,
  LIGHT,
  GREY1,
  GREY2,
  PRIMARY,
  SUCCESS,
  TRANSPARENT,
  PRIMARY_ACCENT,
  SUCCESS_ACCENT,

  // fonts
  H1,
  H2,
  H3,
  BODY_L,
  BODY_M,
  BODY_S,
} from '@src/utils/constants';

const palette = {
  alt: ALT,
  dark: DARK,
  light: LIGHT,
  grey1: GREY1,
  grey2: GREY2,
  primary: PRIMARY,
  success: SUCCESS,
  transparent: TRANSPARENT,
  primaryAccent: PRIMARY_ACCENT,
  successAccent: SUCCESS_ACCENT,
};

export const primaryTheme = createTheme({
  colors: {
    alt: palette.alt,
    dark: palette.dark,
    light: palette.light,
    grey1: palette.grey1,
    grey2: palette.grey2,
    primary: palette.primary,
    success: palette.success,
    transparent: palette.transparent,
    primaryAccent: palette.primaryAccent,
    successAccent: palette.successAccent,
  },
  spacing: {
    xxs: XXS,
    xs: XS,
    s: S,
    m: M,
    l: L,
    xl: XL,
    xl6: XL6,
    xl8: XL8,
    xl9: XL9,
    xl12: XL12,

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
    xs: RFValue(5),
    s: RFValue(10),
    m: RFValue(25),
    full: RFPercentage(50),
  },
});

export type Theme = typeof primaryTheme;
