import React, {FC} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import Image from '../Image';
import {Theme} from '@src/styles/theme';
import {HeaderProps} from '@src/interfaces/content';
import {HeaderNavigationProps} from '@src/interfaces/navigation';
import {
  XL,
  HOME,
  SEARCH,
  PROFILE,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
} from '@src/utils/constants';

const DefaultLeftEl: FC = () => {
  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;

  const navigation = useNavigation<HeaderNavigationProps>();
  const handleNav = () => navigation.navigate(PROFILE);

  return (
    <TouchableOpacity onPress={handleNav} activeOpacity={BTN_TAP_OPACITY}>
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
  const navigation = useNavigation<HeaderNavigationProps>();
  const handleNav = () => navigation.navigate(HOME);

  return (
    <TouchableOpacity onPress={handleNav} activeOpacity={BTN_TAP_OPACITY}>
      <Icon width={RFValue(60)} height={RFValue(60)} name="logo" />
    </TouchableOpacity>
  );
};

const DefaultRightEl: FC = () => {
  const navigation = useNavigation<HeaderNavigationProps>();
  const handleNav = () => navigation.navigate(SEARCH);

  return (
    <TouchableOpacity onPress={handleNav} activeOpacity={BTN_TAP_OPACITY}>
      <Icon name="search" />
    </TouchableOpacity>
  );
};

const Header: FC<HeaderProps> = ({scene, LeftEl, RightEl}) => {
  const {options} = scene.descriptor;
  const {title} = options;

  const isRightElNull = RightEl === null;

  return (
    <SafeAreaView>
      <Box
        paddingTop="s"
        paddingBottom="xs"
        paddingHorizontal="l"
        backgroundColor="dark">
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
            {isRightElNull ? null : RightEl || <DefaultRightEl />}
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
