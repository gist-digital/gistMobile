import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackParamList} from '@src/interfaces/navigation';
import {Intro, Login, Register, RegistrationIntro} from '@src/screens';
import {INTRO, LOGIN, REGISTER, REGISTRATION_INTRO} from '@src/utils/constants';

const Stack = createStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={INTRO}>
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

      <Stack.Screen
        name={REGISTRATION_INTRO}
        component={RegistrationIntro}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Auth;
