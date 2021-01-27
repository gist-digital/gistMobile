import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {
  M,
  XL7,
  XL12,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';
import {Theme} from '@src/styles/theme';
import {dummyFunc} from '@src/utils/helpers';
import {
  Box,
  Text,
  Image,
  Button,
  FlatList,
  SafeAreaView,
} from '@src/components';

const data = Array.from({length: 10}).map((_, i) => ({id: i}));

const FollowItem = () => {
  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;

  return (
    <Box paddingHorizontal="l" marginBottom="m">
      <Box flexDirection="row" marginHorizontal="-xs">
        <Box paddingHorizontal="xs">
          <TouchableOpacity
            onPress={dummyFunc}
            style={{borderRadius: full}}
            activeOpacity={BTN_TAP_OPACITY}>
            <Image
              width={XL7}
              height={XL7}
              borderRadius={full}
              source={{uri: 'https://source.unsplash.com/C8Ta0gwPbQg/96x96'}}
            />
          </TouchableOpacity>
        </Box>

        <Box paddingHorizontal="xs">
          <Text
            color="light"
            variant="bodyM"
            marginBottom="s"
            fontFamily={PRIMARY_REGULAR_FONT}>
            @Sophia_A just joined Gist
          </Text>

          <Box flexDirection="row">
            <Box width={XL12} marginRight="s">
              <Button
                onPress={dummyFunc}
                label="Follow"
                size="s"
                type="secondary"
              />
            </Box>

            <Box width={XL12}>
              <Button
                onPress={dummyFunc}
                label="No thanks"
                size="s"
                type="outline"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Item = () => {
  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;

  return (
    <Box paddingHorizontal="l" marginBottom="m">
      <Box flexDirection="row" marginHorizontal="-xs">
        <Box paddingHorizontal="xs">
          <TouchableOpacity
            onPress={dummyFunc}
            style={{borderRadius: full}}
            activeOpacity={BTN_TAP_OPACITY}>
            <Image
              width={XL7}
              height={XL7}
              borderRadius={full}
              source={{uri: 'https://source.unsplash.com/C8Ta0gwPbQg/96x96'}}
            />
          </TouchableOpacity>
        </Box>

        <Box flex={1} paddingHorizontal="xs">
          <Text color="light" variant="bodyM" fontFamily={PRIMARY_REGULAR_FONT}>
            <Text fontFamily={PRIMARY_MEDIUM_FONT}>@Aishaa</Text> just replied
            to your Gist “I lost my shoes on the train”
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const Notifications = () => {
  const renderItem = ({item: {id}}: {item: {id: number}}) =>
    id === 0 ? <FollowItem /> : <Item />;

  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="dark">
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{paddingTop: M}}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Notifications;
