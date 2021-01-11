import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {INTRO, REGISTER} from '@src/utils/constants';
import {AuthStackParamList} from '@src/interfaces/navigation';
import {Intro, Register} from '@src/screens';

const Stack = createStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={REGISTER}>
      <Stack.Screen
        name={INTRO}
        component={Intro}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={REGISTER}
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Auth;
