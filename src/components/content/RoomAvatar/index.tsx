import React, {FC} from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {RFValue} from 'react-native-responsive-fontsize';

import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import Image from '../Image';
import {Theme} from '@src/styles/theme';
import {dummyFunc} from '@src/utils/helpers';
import {RoomAvatarProps} from '@src/interfaces/content';
import {
  S,
  XXS,
  XL10,
  BTN_TAP_OPACITY,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';

const RoomAvatar: FC<RoomAvatarProps> = ({
  mute,
  username,
  isModerator,
  isSpeaking,
}) => {
  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;
  const {width} = Dimensions.get('screen');

  const iconSize = S + XXS;
  const micIconSize = RFValue(12);
  const borderWidth = isSpeaking ? XXS : 0;
  const innerCirle = XL10 - borderWidth;

  console.log(width, XL10, Math.floor(width / XL10));

  return (
    <Box width={XL10}>
      <Box
        width={XL10}
        height={XL10}
        alignItems="center"
        borderRadius="full"
        position="relative"
        borderColor="primary"
        justifyContent="center"
        borderWidth={borderWidth}>
        <TouchableOpacity
          onPress={dummyFunc}
          activeOpacity={BTN_TAP_OPACITY}
          style={{width: innerCirle, height: innerCirle, borderRadius: full}}>
          <Image
            width={innerCirle}
            height={innerCirle}
            borderRadius={full}
            source={{
              uri: 'https://source.unsplash.com/C8Ta0gwPbQg/96x96',
            }}
          />
        </TouchableOpacity>

        {isModerator && (
          <Box
            left={0}
            bottom={0}
            width={iconSize}
            height={iconSize}
            position="absolute"
            alignItems="center"
            borderRadius="full"
            justifyContent="center"
            backgroundColor="success">
            <Icon
              name="star"
              width={micIconSize}
              height={micIconSize}
              color="successAccent"
            />
          </Box>
        )}

        {mute && (
          <Box
            right={0}
            bottom={0}
            width={iconSize}
            height={iconSize}
            position="absolute"
            alignItems="center"
            borderRadius="full"
            backgroundColor="light"
            justifyContent="center">
            <Icon
              color="dark"
              name="mic_off_color"
              width={micIconSize}
              height={micIconSize}
            />
          </Box>
        )}
      </Box>

      <Text
        color="light"
        marginTop="xs"
        variant="bodyS"
        textAlign="center"
        fontFamily={PRIMARY_REGULAR_FONT}>
        {username}
      </Text>
    </Box>
  );
};

export default RoomAvatar;
