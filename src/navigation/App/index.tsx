import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '@src/screens';
import {Header} from '@src/components';
import {HOME} from '@src/utils/constants';
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
    </Stack.Navigator>
  );
};

export default App;
