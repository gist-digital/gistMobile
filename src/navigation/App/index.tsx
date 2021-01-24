import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Header} from '@src/components';
import {Home, Search, Profile} from '@src/screens';
import {HOME, PROFILE, SEARCH} from '@src/utils/constants';
import {AppStackParamList} from '@src/interfaces/navigation';

const Stack = createStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={HOME}>
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{title: undefined, header: Header}}
      />

      <Stack.Screen
        name={SEARCH}
        component={Search}
        options={{title: undefined, headerShown: false}}
      />

      <Stack.Screen
        name={PROFILE}
        component={Profile}
        options={{title: undefined, header: Header}}
      />
    </Stack.Navigator>
  );
};

export default App;
