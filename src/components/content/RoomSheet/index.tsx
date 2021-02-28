import React, {FC, useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import RoomAvatar from '../RoomAvatar';
import {Theme} from '@src/styles/theme';
import Botton from '../../inputs/Button';
import {dummyFunc} from '@src/utils/helpers';
import {BottomSheetHandle, BottomSheetBackground} from '../BottomSheetHelpers';

import {
  M,
  XL6,
  XL11,
  DARK,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
} from '@src/utils/constants';

const DATA = Array.from({length: 15}).map((_, i) => ({id: `${i}`}));

const ListHeader: FC = () => {
  return (
    <Box paddingTop="s" paddingHorizontal="m">
      <Box marginBottom="s" marginHorizontal="-m" paddingLeft="m">
        <BottomSheetScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          {DATA.map(({id}) => (
            <Box key={id} marginRight="s">
              <RoomAvatar mute={false} username="Joe" isModerator isSpeaking />
            </Box>
          ))}
        </BottomSheetScrollView>
      </Box>

      <Box marginHorizontal="-m" paddingLeft="m">
        <BottomSheetScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          {DATA.map(({id}) => (
            <Box key={id} marginRight="s">
              <RoomAvatar
                mute
                username="Joe"
                isModerator={false}
                isSpeaking={false}
              />
            </Box>
          ))}
        </BottomSheetScrollView>
      </Box>

      <Text
        color="light"
        marginTop="l"
        variant="bodyM"
        marginBottom="m"
        fontFamily={PRIMARY_MEDIUM_FONT}>
        Others in the room
      </Text>
    </Box>
  );
};

const Item: FC = () => {
  return (
    <Box marginBottom="s" width="33.33%" alignItems="center">
      <RoomAvatar
        mute={false}
        username="Joe"
        isSpeaking={false}
        isModerator={false}
      />
    </Box>
  );
};

const snapPoints = ['10%', '40%', '80%'];

const RoomSheet: FC = () => {
  const roomSheetRef = useRef<BottomSheet>(null);

  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;

  const renderItem = () => <Item />;

  return (
    <BottomSheet
      index={0}
      ref={roomSheetRef}
      snapPoints={snapPoints}
      handleComponent={BottomSheetHandle}
      backdropComponent={BottomSheetBackdrop}
      backgroundComponent={BottomSheetBackground}>
      <BottomSheetView style={styles.bottommSheetWrapper}>
        <Box paddingHorizontal="m" paddingTop="xs">
          <Text
            color="light"
            variant="bodyL"
            marginBottom="xs"
            fontFamily={PRIMARY_MEDIUM_FONT}>
            Star Sign Compatibility
          </Text>
        </Box>

        <Box flex={1}>
          <BottomSheetFlatList
            data={DATA}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={ListHeader}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{paddingHorizontal: M}}
          />
        </Box>

        <Box
          alignItems="center"
          flexDirection="row"
          paddingVertical="xs"
          paddingHorizontal="m"
          justifyContent="space-between">
          <Box width={XL11}>
            <Botton label="Exit room" onPress={dummyFunc} size="s" />
          </Box>

          <Box>
            <Box
              width={XL6}
              height={XL6}
              borderRadius="full"
              backgroundColor="grey2">
              <TouchableOpacity
                onPress={dummyFunc}
                activeOpacity={BTN_TAP_OPACITY}
                style={{width: XL6, height: XL6, borderRadius: full}}>
                <Box
                  width="100%"
                  height="100%"
                  alignItems="center"
                  justifyContent="center">
                  <Icon name="mic" color="grey1" />
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottommSheetWrapper: {
    flex: 1,
    backgroundColor: DARK,
  },
});

export default RoomSheet;
