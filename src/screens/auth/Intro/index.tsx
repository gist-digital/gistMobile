import React, {FC} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@shopify/restyle';
import Onboarding from 'react-native-onboarding-swiper';
import {RFValue} from 'react-native-responsive-fontsize';

import {Theme} from '@src/styles/theme';
import {Text, Image, Box, Button} from '@src/components';
import {IntroScreenProps} from '@src/interfaces/navigation';
import {
  L,
  XL9,
  REGISTRATION_INTRO,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';

const imgHeight = RFValue(160);
const speak = require('../../../assets/images/speak.webp');
const mic = require('../../../assets/images/mic.webp');
const eyes = require('../../../assets/images/eyes.webp');

const Label: FC<{label: string}> = ({label}) => {
  return (
    <Text color="grey1" variant="bodyL" fontFamily={PRIMARY_REGULAR_FONT}>
      {label}
    </Text>
  );
};

const SubTitle: FC<{text: string}> = ({text, children}) => {
  return (
    <Box width="100%" maxWidth={RFValue(225)}>
      <Text
        color="light"
        variant="bodyL"
        textAlign="center"
        fontFamily={PRIMARY_MEDIUM_FONT}>
        {text}
      </Text>

      {children}
    </Box>
  );
};

const SlideImage: FC<{source: number}> = ({source}) => {
  return (
    <Image
      source={source}
      width={imgHeight}
      height={imgHeight}
      resizeMode="contain"
    />
  );
};

const Intro = ({navigation}: IntroScreenProps) => {
  const theme = useTheme<Theme>();
  const {dark} = theme.colors;

  const pagesObj = {title: '', backgroundColor: dark};

  const handleRegistrationNav = () => {
    navigation.navigate(REGISTRATION_INTRO);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
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
            ...pagesObj,
            image: <SlideImage source={speak} />,
            subtitle: (
              <SubTitle text="Gist is slang for lowkey conversations" />
            ),
          },
          {
            ...pagesObj,
            image: <SlideImage source={mic} />,
            subtitle: <SubTitle text="You can record & listen to new Gist" />,
          },
          {
            ...pagesObj,
            image: <SlideImage source={eyes} />,
            subtitle: (
              <SubTitle text="Or join Gist Rooms with friends and influencers">
                <Box width="100%" marginTop="xl">
                  <Button
                    onPress={handleRegistrationNav}
                    label="Ok, sign me up"
                  />
                </Box>
              </SubTitle>
            ),
          },
        ]}
      />
    </>
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
