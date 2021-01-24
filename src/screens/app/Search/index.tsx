import React, {FC, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {
  Box,
  Text,
  Icon,
  Image,
  FlatList,
  RoomItem,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from '@src/components';
import {
  S,
  L,
  XXS,
  XL9,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';
import {Theme} from '@src/styles/theme';
import {RoomItemProps} from '@src/interfaces/content';
import {categories, roomData, dummyFunc} from '@src/utils/helpers';

const ListHeader: FC = () => {
  return (
    <Box flex={1} paddingTop="s" paddingBottom="m" paddingHorizontal="l">
      <Box marginBottom="xl">
        <Text variant="bodyL" color="light" fontFamily={PRIMARY_MEDIUM_FONT}>
          People to follow
        </Text>

        <Box marginTop="s" marginHorizontal="-l">
          <ScrollView
            horizontal
            contentContainerStyle={styles.horizontalScroll}>
            {roomData.map(({id, host}) => (
              <Box key={id} marginRight="m">
                <TouchableOpacity
                  onPress={dummyFunc}
                  activeOpacity={BTN_TAP_OPACITY}>
                  <Box alignItems="center">
                    <Image
                      width={XL9}
                      height={XL9}
                      borderRadius={XL9 / 3.5}
                      source={{
                        uri: 'https://source.unsplash.com/C8Ta0gwPbQg/96x96',
                      }}
                    />

                    <Text
                      color="light"
                      marginTop="xs"
                      variant="bodyS"
                      fontFamily={PRIMARY_REGULAR_FONT}>
                      {host}
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            ))}
          </ScrollView>
        </Box>
      </Box>

      <Box>
        <Text variant="bodyL" color="light" fontFamily={PRIMARY_MEDIUM_FONT}>
          Conversations
        </Text>

        <Box marginTop="s" marginHorizontal="-l">
          <ScrollView
            horizontal
            contentContainerStyle={styles.horizontalScroll}>
            {categories.map((category) => (
              <Box
                key={category}
                marginRight="s"
                borderRadius="xs"
                overflow="hidden">
                <TouchableOpacity
                  onPress={dummyFunc}
                  activeOpacity={BTN_TAP_OPACITY}>
                  <Box
                    paddingVertical="xs"
                    paddingHorizontal="s"
                    backgroundColor="grey2">
                    <Text
                      color="light"
                      variant="bodyS"
                      fontFamily={PRIMARY_REGULAR_FONT}>
                      {category}
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            ))}
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
};

const Item: FC<RoomItemProps> = ({type, host, title}) => (
  <Box paddingHorizontal="l" marginBottom="m">
    <RoomItem type={type} host={host} title={title} />
  </Box>
);

const Search = () => {
  const theme = useTheme<Theme>();
  const {grey1} = theme.colors;
  const {bodyM} = theme.textVariants;

  const [, setQuery] = useState<string>('');

  const handleChange = (val: string) => setQuery(val);

  const renderItem = ({item}: {item: RoomItemProps}) => (
    <Item type={item.type} host={item.host} title={item.title} />
  );

  const iconDimension = S + XXS;
  const inputInline = {
    color: grey1,
    fontSize: bodyM.fontSize,
    fontFamily: PRIMARY_REGULAR_FONT,
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Box paddingTop="xl6" paddingHorizontal="l">
          <Text variant="h2" color="light" fontFamily={PRIMARY_MEDIUM_FONT}>
            Explore gists
          </Text>

          <Box
            marginTop="m"
            marginBottom="xs"
            borderRadius="s"
            flexDirection="row"
            alignItems="center"
            paddingVertical="s"
            paddingHorizontal="s"
            backgroundColor="grey2">
            <Icon
              color="grey1"
              name="search"
              width={iconDimension}
              height={iconDimension}
            />

            <Box flex={1} marginLeft="xs">
              <TextInput
                placeholder="Search"
                onChangeText={handleChange}
                placeholderTextColor={grey1}
                style={[styles.input, inputInline]}
              />
            </Box>
          </Box>
        </Box>

        <FlatList
          data={roomData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={ListHeader}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  horizontalScroll: {
    paddingLeft: L,
  },
});

export default Search;
