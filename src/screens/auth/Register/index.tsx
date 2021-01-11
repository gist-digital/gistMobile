import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import {dummyFunc} from '@src/utils/helpers';
import {
  Box,
  Text,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
} from '@src/components';
import {
  M,
  BTN_TAP_OPACITY,
  PRIMARY_REGULAR_FONT,
  PRIMARY_MEDIUM_FONT,
} from '@src/utils/constants';

const twitter = require('../../../assets/images/twitter.webp');
const facebook = require('../../../assets/images/facebook.webp');
const instagram = require('../../../assets/images/instagram.webp');

const Icon: FC<{source: number}> = ({source}) => {
  return (
    <Box left={0} paddingLeft="s" position="absolute">
      <Image source={source} width={M} height={M} resizeMode="cover" />
    </Box>
  );
};

const Register = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box flex={1} paddingHorizontal="l" paddingVertical="xl12">
          <Text
            variant="h2"
            color="light"
            textAlign="center"
            fontFamily={PRIMARY_MEDIUM_FONT}>
            Speak your mind
          </Text>

          <Box marginTop="xl9">
            <Button
              type="outline"
              onPress={dummyFunc}
              label="Sign up with Twitter"
              icon={<Icon source={twitter} />}
            />
          </Box>

          <Box marginVertical="m">
            <Button
              type="outline"
              onPress={dummyFunc}
              label="Sign up with Facebook"
              icon={<Icon source={facebook} />}
            />
          </Box>

          <Box marginBottom="xl6">
            <Button
              type="outline"
              onPress={dummyFunc}
              label="Sign up with Instagram"
              icon={<Icon source={instagram} />}
            />
          </Box>

          <Box marginBottom="s">
            <Button onPress={dummyFunc} label="Sign up" />
          </Box>

          <TouchableOpacity activeOpacity={BTN_TAP_OPACITY} onPress={dummyFunc}>
            <Text
              color="light"
              variant="bodyL"
              textAlign="center"
              fontFamily={PRIMARY_REGULAR_FONT}>
              Already have an account?{' '}
              <Text textDecorationLine="underline">Sign in</Text>
            </Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
