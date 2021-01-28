import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {
  L,
  XL12,
  XL13,
  BIO_UPDATE,
  AVATAR_UPDATE,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';
import {Theme} from '@src/styles/theme';
import {dummyFunc} from '@src/utils/helpers';
import {ProfileScreenProps} from '@src/interfaces/navigation';
import {
  Box,
  Text,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
} from '@src/components';

const Profile = ({navigation}: ProfileScreenProps) => {
  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;

  const handleAvatarNav = () => {
    navigation.navigate(AVATAR_UPDATE);
  };

  const handleBioNav = () => {
    navigation.navigate(BIO_UPDATE);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Box flex={1} paddingTop="m" paddingHorizontal="l">
          <Box flexDirection="row">
            <Box marginRight="m" flexShrink={0}>
              <TouchableOpacity
                onPress={handleAvatarNav}
                activeOpacity={BTN_TAP_OPACITY}
                style={{width: XL13, height: XL13, borderRadius: full}}>
                <Image
                  width={XL13}
                  height={XL13}
                  borderRadius={full}
                  source={{
                    uri: 'https://source.unsplash.com/C8Ta0gwPbQg/96x96',
                  }}
                />
              </TouchableOpacity>
            </Box>

            <Box flex={1}>
              <Text
                variant="h3"
                color="light"
                fontFamily={PRIMARY_REGULAR_FONT}>
                Meena Cameron
              </Text>

              <Text
                color="light"
                marginTop="xs"
                variant="bodyM"
                marginBottom="s"
                fontFamily={PRIMARY_REGULAR_FONT}>
                @MeenaC
              </Text>

              <Box width={XL12}>
                <Button onPress={dummyFunc} label="Follow" size="s" />
              </Box>
            </Box>
          </Box>

          <Box marginVertical="m" flexDirection="row">
            <Box marginRight="l">
              <TouchableOpacity
                onPress={dummyFunc}
                activeOpacity={BTN_TAP_OPACITY}>
                <Text
                  color="light"
                  variant="bodyL"
                  fontFamily={PRIMARY_MEDIUM_FONT}>
                  200{' '}
                  <Text variant="bodyS" fontFamily={PRIMARY_REGULAR_FONT}>
                    Followers
                  </Text>
                </Text>
              </TouchableOpacity>
            </Box>

            <Box>
              <TouchableOpacity
                onPress={dummyFunc}
                activeOpacity={BTN_TAP_OPACITY}>
                <Text
                  color="light"
                  variant="bodyL"
                  fontFamily={PRIMARY_MEDIUM_FONT}>
                  120{' '}
                  <Text variant="bodyS" fontFamily={PRIMARY_REGULAR_FONT}>
                    Following
                  </Text>
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>

          <TouchableOpacity
            onPress={handleBioNav}
            activeOpacity={BTN_TAP_OPACITY}>
            <Text
              variant="bodyM"
              color="light"
              lineHeight={L}
              fontFamily={PRIMARY_REGULAR_FONT}>
              Hi, I’m Meena. I’m a law student and the CEO of beatbox.
              {'\n'} Interests: Beauty & Law
            </Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
