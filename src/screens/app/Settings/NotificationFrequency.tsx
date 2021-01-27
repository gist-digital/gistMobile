import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {dummyFunc} from '@src/utils/helpers';
import {notificationFrequencyOptions} from '@src/utils/helpers';
import {Box, Text, Radio, ScrollView, SafeAreaView} from '@src/components';
import {
  XL6,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';

const NotificationFrequency = () => {
  const renderItem = (option: string, index: number) => {
    const isFirst = index === 0;
    const isLast = index === notificationFrequencyOptions.length - 1;

    return (
      <Box
        key={option}
        overflow="hidden"
        backgroundColor="grey2"
        style={{marginBottom: RFValue(2)}}
        borderTopRightRadius={isFirst ? 's' : undefined}
        borderTopLeftRadius={isFirst ? 's' : undefined}
        borderBottomLeftRadius={isLast ? 's' : undefined}
        borderBottomRightRadius={isLast ? 's' : undefined}>
        <TouchableOpacity onPress={dummyFunc} activeOpacity={BTN_TAP_OPACITY}>
          <Box
            height={XL6}
            paddingLeft="m"
            paddingRight="s"
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between">
            <Text
              color="light"
              variant="bodyL"
              fontFamily={PRIMARY_REGULAR_FONT}>
              {option}
            </Text>

            <Radio checked={false} />
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Box
          flex={1}
          paddingHorizontal="l"
          paddingTop="m"
          backgroundColor="dark">
          <Text
            color="light"
            variant="bodyL"
            marginBottom="s"
            fontFamily={PRIMARY_MEDIUM_FONT}>
            Notification frequency
          </Text>

          {notificationFrequencyOptions.map(renderItem)}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationFrequency;
