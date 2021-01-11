import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {INTRO, LOGIN, REGISTER} from '@src/utils/constants';
import {AuthStackParamList} from '@src/interfaces/navigation';
import {Intro, Login, Register} from '@src/screens';

const Stack = createStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={LOGIN}>
      <Stack.Screen
        name={INTRO}
        component={Intro}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={LOGIN}
        component={Login}
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
