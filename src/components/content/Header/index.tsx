import React, {FC} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {RFValue} from 'react-native-responsive-fontsize';

import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import Image from '../Image';
import {logo} from '@src/utils/helpers';
import {Theme} from '@src/styles/theme';
import {dummyFunc} from '@src/utils/helpers';
import {HeaderProps} from '@src/interfaces/content';
import {XL, BTN_TAP_OPACITY, PRIMARY_MEDIUM_FONT} from '@src/utils/constants';

const DefaultLeftEl: FC = () => {
  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;

  return (
    <TouchableOpacity onPress={dummyFunc} activeOpacity={BTN_TAP_OPACITY}>
      <Image
        width={XL}
        height={XL}
        borderRadius={full}
        source={{uri: 'https://source.unsplash.com/C8Ta0gwPbQg/96x96'}}
      />
    </TouchableOpacity>
  );
};

const DefaultTitle: FC = () => {
  return (
    <TouchableOpacity onPress={dummyFunc} activeOpacity={BTN_TAP_OPACITY}>
      <Image
        source={logo}
        width={RFValue(70)}
        resizeMode="contain"
        height={RFValue(70)}
      />
    </TouchableOpacity>
  );
};

const DefaultRightEl: FC = () => {
  return (
    <TouchableOpacity onPress={dummyFunc} activeOpacity={BTN_TAP_OPACITY}>
      <Icon name="search" />
    </TouchableOpacity>
  );
};

const Header: FC<HeaderProps> = ({scene, LeftEl, RightEl}) => {
  const {options} = scene.descriptor;
  const {title} = options;

  return (
    <SafeAreaView>
      <Box paddingTop="s" paddingHorizontal="l" backgroundColor="dark">
        <Box
          flexWrap="wrap"
          flexDirection="row"
          alignItems="center"
          marginHorizontal="-s">
          <Box
            width="25%"
            flexDirection="row"
            alignItems="center"
            paddingHorizontal="s">
            {LeftEl || <DefaultLeftEl />}
          </Box>

          <Box
            width="50%"
            alignItems="center"
            flexDirection="row"
            paddingHorizontal="s"
            justifyContent="center">
            {title ? (
              <Text
                color="light"
                variant="bodyL"
                fontFamily={PRIMARY_MEDIUM_FONT}>
                {title}
              </Text>
            ) : (
              <DefaultTitle />
            )}
          </Box>

          <Box
            width="25%"
            alignItems="center"
            flexDirection="row"
            paddingHorizontal="s"
            justifyContent="flex-end">
            {RightEl || <DefaultRightEl />}
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
