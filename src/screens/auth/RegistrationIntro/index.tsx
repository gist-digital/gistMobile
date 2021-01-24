import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Box,
  Text,
  Icon,
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
import {dummyFunc} from '@src/utils/helpers';

const twitter = require('../../../assets/images/twitter.webp');
const facebook = require('../../../assets/images/facebook.webp');
const instagram = require('../../../assets/images/instagram.webp');

const SocialIcon: FC<{source: number}> = ({source}) => {
  return (
    <Box left={0} paddingLeft="s" position="absolute">
      <Image source={source} width={M} height={M} resizeMode="cover" />
    </Box>
  );
};

const RegistrationIntro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box flex={1} paddingHorizontal="l" paddingVertical="xl6">
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

          <Box marginTop="xl9">
            <Button
              type="outline"
              onPress={dummyFunc}
              label="Sign up with Twitter"
              icon={<SocialIcon source={twitter} />}
            />
          </Box>

          <Box marginVertical="m">
            <Button
              type="outline"
              onPress={dummyFunc}
              label="Sign up with Facebook"
              icon={<SocialIcon source={facebook} />}
            />
          </Box>

          <Box marginBottom="xl6">
            <Button
              type="outline"
              onPress={dummyFunc}
              label="Sign up with Instagram"
              icon={<SocialIcon source={instagram} />}
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

export default RegistrationIntro;
