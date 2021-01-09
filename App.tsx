/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import * as Sentry from '@sentry/react-native';
import {ThemeProvider} from '@shopify/restyle';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import {SENTRY_DSN} from '@src/utils/constants';
import {primaryTheme} from '@src/styles/theme';
import {Auth} from '@src/navigation';

declare const global: {HermesInternal: null | {}};

Sentry.init({
  dsn: SENTRY_DSN,
});

const App = () => {
  useEffect(() => {
    const init = async () => {
      await RNBootSplash.hide({fade: true});
    };

    init();
  }, []);

  return (
    <ThemeProvider theme={primaryTheme}>
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
