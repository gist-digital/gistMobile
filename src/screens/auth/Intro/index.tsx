import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';
import Onboarding from 'react-native-onboarding-swiper';
import {RFValue} from 'react-native-responsive-fontsize';

import {Theme} from '@src/styles/theme';
import {Text, Image} from '@src/components';
import {
  L,
  XL9,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';

const imgHeight = RFValue(160);

const Label: FC<{label: string}> = ({label}) => {
  return (
    <Text color="grey1" variant="bodyL" fontFamily={PRIMARY_REGULAR_FONT}>
      {label}
    </Text>
  );
};

const Intro = () => {
  const theme = useTheme<Theme>();
  const {dark} = theme.colors;

  return (
    <Onboarding
      skipToPage={2}
      showDone={false}
      titleStyles={styles.titleStyles}
      nextLabel={<Label label="Next" />}
      skipLabel={<Label label="Skip" />}
      containerStyles={styles.containerStyles}
      imageContainerStyles={styles.imageContainerStyles}
      pages={[
        {
          title: '',
          backgroundColor: dark,
          image: (
            <Image
              width={imgHeight}
              height={imgHeight}
              resizeMode="contain"
              source={require('../../../assets/images/speak.webp')}
            />
          ),
          subtitle: (
            <Text
              color="light"
              variant="bodyL"
              textAlign="center"
              fontFamily={PRIMARY_MEDIUM_FONT}>
              Gist is slang for lowkey conversations
            </Text>
          ),
        },
        {
          title: '',
          backgroundColor: dark,
          image: (
            <Image
              width={imgHeight}
              height={imgHeight}
              resizeMode="contain"
              source={require('../../../assets/images/mic.webp')}
            />
          ),
          subtitle: (
            <Text
              color="light"
              variant="bodyL"
              textAlign="center"
              fontFamily={PRIMARY_MEDIUM_FONT}>
              You can record & listen to new Gist
            </Text>
          ),
        },
        {
          title: '',
          backgroundColor: dark,
          image: (
            <Image
              width={imgHeight}
              height={imgHeight}
              resizeMode="contain"
              source={require('../../../assets/images/eyes.webp')}
            />
          ),
          subtitle: (
            <Text
              color="light"
              variant="bodyL"
              textAlign="center"
              fontFamily={PRIMARY_MEDIUM_FONT}>
              Or join Gist Rooms with friends and influencers
            </Text>
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  titleStyles: {
    display: 'none',
  },
  containerStyles: {
    paddingHorizontal: L,
  },
  imageContainerStyles: {
    paddingBottom: 0,
    marginBottom: XL9,
  },
});

export default Intro;
