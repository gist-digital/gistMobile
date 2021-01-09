import {createTheme} from '@shopify/restyle';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

import {DARK, LIGHT, GREY1, GREY2, PRIMARY} from '@src/utils/constants';

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
    xxs: RFValue(4),
    xs: RFValue(8),
    s: RFValue(16),
    m: RFValue(24),
    l: RFValue(32),
    xl: RFValue(40),

    '-xxs': RFValue(-4),
    '-xs': RFValue(-8),
    '-s': RFValue(-16),
    '-m': RFValue(-24),
    '-l': RFValue(-32),
    '-xl': RFValue(-40),
  },
  breakpoints: {},
  zIndices: {},
  borderRadii: {
    full: RFPercentage(50),
  },
});

export type Theme = typeof primaryTheme;
