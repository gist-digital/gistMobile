import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {launchImageLibrary} from 'react-native-image-picker';

import {Theme} from '@src/styles/theme';
import {dummyFunc} from '@src/utils/helpers';
import {PRIMARY_MEDIUM_FONT} from '@src/utils/constants';
import {XL10, BTN_TAP_OPACITY} from '@src/utils/constants';
import {
  Box,
  Text,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
} from '@src/components';

const AvatarUpdate = () => {
  const theme = useTheme<Theme>();
  const [avatarURI, setAvatarURI] = useState(
    'https://source.unsplash.com/C8Ta0gwPbQg/96x96',
  );

  const {full} = theme.borderRadii;
  const avatarDimension = XL10 * 2;

  const handleLaunch = () => {
    launchImageLibrary({mediaType: 'photo'}, ({uri}) => {
      if (uri) {
        setAvatarURI(uri);
      }
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Box flex={1} paddingTop="m" paddingHorizontal="m">
          <Box alignItems="center" padding="m">
            <TouchableOpacity
              onPress={handleLaunch}
              activeOpacity={BTN_TAP_OPACITY}
              style={{
                borderRadius: full,
                width: avatarDimension,
                height: avatarDimension,
              }}>
              <Image
                borderRadius={full}
                width={avatarDimension}
                height={avatarDimension}
                source={{
                  uri: avatarURI,
                }}
              />
            </TouchableOpacity>
          </Box>

          <Text
            color="light"
            marginTop="l"
            variant="bodyL"
            textAlign="center"
            marginBottom="xl12"
            fontFamily={PRIMARY_MEDIUM_FONT}>
            Change your photo
          </Text>

          <Box alignItems="center" paddingTop="m">
            <Box width={avatarDimension}>
              <Button label="Done" onPress={dummyFunc} />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AvatarUpdate;
