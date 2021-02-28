import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  BTN_TAP_OPACITY,
  REGISTRATION_INTRO,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';
import {
  Box,
  Text,
  Icon,
  LoginForm,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from '@src/components';
import {LoginScreenProps} from '@src/interfaces/navigation';
import {dummyFunc} from '@src/utils/helpers';

const Login = ({navigation}: LoginScreenProps) => {
  const hanleRegistrationIntroNav = () => {
    navigation.navigate(REGISTRATION_INTRO);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView>
          <Box flex={1} paddingHorizontal="m" paddingVertical="xl6">
            <Box alignItems="center">
              <Icon width={RFValue(60)} height={RFValue(60)} name="logo" />
            </Box>

            <Text
              variant="h2"
              marginTop="m"
              color="light"
              textAlign="center"
              fontFamily={PRIMARY_MEDIUM_FONT}>
              Speak your mind
            </Text>

            <Box marginTop="xl9" marginBottom="s">
              <LoginForm handleSubmit={dummyFunc} />
            </Box>

            <TouchableOpacity
              onPress={hanleRegistrationIntroNav}
              activeOpacity={BTN_TAP_OPACITY}>
              <Text
                color="light"
                variant="bodyL"
                textAlign="center"
                textDecorationLine="underline"
                fontFamily={PRIMARY_REGULAR_FONT}>
                Sign up
              </Text>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
