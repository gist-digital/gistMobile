import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '@src/screens';
import {HOME} from '@src/utils/constants';
import {AppStackParamList} from '@src/interfaces/navigation';

const Stack = createStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default App;
