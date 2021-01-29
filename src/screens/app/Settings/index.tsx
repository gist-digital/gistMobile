import React from 'react';
import {TouchableOpacity, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  M,
  L,
  XL6,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
  NOTIFICATIONS_FREQUENCY,
} from '@src/utils/constants';
import {dummyFunc} from '@src/utils/helpers';
import {SettingsNavigationProps} from '@src/interfaces/navigation';
import {Box, Icon, Text, SectionList, SafeAreaView} from '@src/components';

const DATA = [
  {
    title: 'Notifications',
    data: [
      {
        title: 'Frequency',
        type: 'string',
        value: 'Frequent',
      },
      {
        title: 'Gist preferences',
        type: 'string',
        value: '',
      },
      {
        title: 'Include trending rooms',
        type: 'switch',
        value: false,
      },
      {
        title: 'Include trending gists',
        type: 'switch',
        value: true,
      },
      {
        title: 'Pause',
        type: 'switch',
        value: false,
      },
    ],
  },
  {
    title: 'Gist info',
    data: [
      {
        title: "What's New",
        action: null,
      },
      {
        title: 'Frequently Asked Questions',
        action: null,
      },
      {
        title: 'Community Guidelines',
        action: null,
      },
      {
        title: 'Terms of Service',
        action: null,
      },
      {
        title: 'Privacy Policy',
        action: null,
      },
      {
        title: 'Contact Us',
        action: null,
      },
    ],
  },
];

const HasPress = ({title, value}) => {
  const navigation = useNavigation<SettingsNavigationProps>();
  const handleNav = () => navigation.navigate(NOTIFICATIONS_FREQUENCY);

  return (
    <TouchableOpacity onPress={handleNav} activeOpacity={BTN_TAP_OPACITY}>
      <Box
        height={XL6}
        paddingLeft="m"
        paddingRight="s"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between">
        <Text color="light" variant="bodyL" fontFamily={PRIMARY_REGULAR_FONT}>
          {title}
        </Text>

        <Text variant="bodyS" color="grey1" fontFamily={PRIMARY_REGULAR_FONT}>
          {value}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

const HasSwitch = ({title, value}) => {
  return (
    <Box
      height={XL6}
      paddingLeft="m"
      paddingRight="s"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between">
      <Text color="light" variant="bodyL" fontFamily={PRIMARY_REGULAR_FONT}>
        {title}
      </Text>

      <Switch
        trackColor={{false: '#B2B4B4', true: '#579B55'}}
        thumbColor={value ? '#FFFFFF' : '#282828'}
        ios_backgroundColor="#B2B4B4"
        onValueChange={dummyFunc}
        value={value}
      />
    </Box>
  );
};

const NotificationsItem = ({index, item}) => {
  const isFirst = index === 0;
  const isLast = index === 4;

  const {title, type, value} = item;

  return (
    <Box paddingHorizontal="m" marginTop={isFirst ? 'xs' : undefined}>
      <Box
        overflow="hidden"
        backgroundColor="grey2"
        style={{marginBottom: RFValue(2)}}
        borderTopRightRadius={isFirst ? 's' : undefined}
        borderTopLeftRadius={isFirst ? 's' : undefined}
        borderBottomLeftRadius={isLast ? 's' : undefined}
        borderBottomRightRadius={isLast ? 's' : undefined}>
        {type === 'string' ? (
          <HasPress title={title} value={value} />
        ) : (
          <HasSwitch title={title} value={value} />
        )}
      </Box>
    </Box>
  );
};

const InfoItem = ({item}) => {
  const {action, title} = item;

  return (
    <Box paddingHorizontal="m" marginVertical="xxs">
      <Box overflow="hidden" backgroundColor="grey2" borderRadius="s">
        <TouchableOpacity onPress={dummyFunc} activeOpacity={BTN_TAP_OPACITY}>
          <Box
            height={XL6}
            paddingLeft="m"
            paddingRight="xs"
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between">
            <Text
              color="light"
              variant="bodyL"
              fontFamily={PRIMARY_REGULAR_FONT}>
              {title}
            </Text>

            <Box>
              <Icon name="arrow_right" />
            </Box>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

const Settings = () => {
  const renderItem = ({index, item, section}) => {
    return section.title === 'Gist info' ? (
      <InfoItem item={item} />
    ) : (
      <NotificationsItem index={index} item={item} />
    );
  };

  const renderHeader = ({section: {title}}) => {
    return (
      <Box paddingHorizontal="m" backgroundColor="dark" paddingBottom="xs">
        <Text color="light" variant="bodyL" fontFamily={PRIMARY_MEDIUM_FONT}>
          {title}
        </Text>
      </Box>
    );
  };

  const renderSectionSeparator = ({leadingSection, leadingItem}) => {
    const isLeadingGistInfo = !leadingSection && leadingItem;

    if (isLeadingGistInfo) {
      return <Box height={L} />;
    }

    return null;
  };

  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="dark">
        <SectionList
          sections={DATA}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
          contentContainerStyle={{paddingTop: M}}
          SectionSeparatorComponent={renderSectionSeparator}
          keyExtractor={(item, index) => item.title + index}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Settings;
