import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {INTRO} from '@src/utils/constants';
import {AuthStackParamList} from '@src/interfaces/navigation';
import {Intro} from '@src/screens';

const Stack = createStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={INTRO}>
      <Stack.Screen
        name={INTRO}
        component={Intro}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Auth;
