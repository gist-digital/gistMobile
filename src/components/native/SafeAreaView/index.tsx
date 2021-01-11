import React, {FC} from 'react';
import {SafeAreaView as RNSafeAreaView} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {Theme} from '@src/styles/theme';

const SafeAreaView: FC = ({children}) => {
  const theme = useTheme<Theme>();
  const {dark} = theme.colors;

  return (
    <RNSafeAreaView style={{flex: 1, backgroundColor: dark}}>
      {children}
    </RNSafeAreaView>
  );
};

export default SafeAreaView;
