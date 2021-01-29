import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  BTN_TAP_OPACITY,
  PRIMARY_REGULAR_FONT,
  PRIMARY_MEDIUM_FONT,
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
import {dummyFunc} from '@src/utils/helpers';

const Login = () => {
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
              activeOpacity={BTN_TAP_OPACITY}
              onPress={dummyFunc}>
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
