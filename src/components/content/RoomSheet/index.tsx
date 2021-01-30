import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  withSpring,
  interpolate,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {useTheme} from '@shopify/restyle';
import {clamp} from 'react-native-redash';

import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import RoomAvatar from '../RoomAvatar';
import {Theme} from '@src/styles/theme';
import Botton from '../../inputs/Button';
import {dummyFunc} from '@src/utils/helpers';
import FlatList from '../../native/FlatList';
import ScrollView from '../../native/ScrollView';
import SafeAreaView from '../../native/SafeAreaView';
import {RoomSheetProps} from '@src/interfaces/content';
import {
  M,
  XL11,
  XL6,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
} from '@src/utils/constants';

const DATA = Array.from({length: 15}).map((_, i) => ({id: `${i}`}));

const ListHeader: FC = () => {
  return (
    <Box paddingTop="s" paddingHorizontal="m">
      <Box marginBottom="s" marginHorizontal="-m" paddingLeft="m">
        <ScrollView horizontal>
          {DATA.map(({id}) => (
            <Box key={id} marginRight="s">
              <RoomAvatar mute={false} username="Joe" isModerator isSpeaking />
            </Box>
          ))}
        </ScrollView>
      </Box>

      <Box marginHorizontal="-m" paddingLeft="m">
        <ScrollView horizontal>
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
        </ScrollView>
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

const RoomSheet: FC<RoomSheetProps> = ({translateY, minAppHeight}) => {
  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;

  const style = useAnimatedStyle(() => {
    return {
      left: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      position: 'absolute',
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [0, minAppHeight],
            [0, minAppHeight],
          ),
        },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {offsetY: number}
  >({
    onActive: ({translationY}) => {
      translateY.value = clamp(
        translateY.value - translationY * -1,
        0,
        minAppHeight,
      );
    },
    onEnd: ({translationY}) => {
      translateY.value = withSpring(
        clamp(translateY.value - translationY * -1, 0, minAppHeight),
      );
    },
  });

  const renderItem = () => <Item />;

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={style}>
        <SafeAreaView>
          <Box
            flex={1}
            paddingVertical="m"
            style={styles.shadow}
            borderTopLeftRadius="m"
            borderTopRightRadius="m">
            <Box paddingHorizontal="m">
              <Text
                color="light"
                variant="bodyL"
                marginBottom="xs"
                fontFamily={PRIMARY_MEDIUM_FONT}>
                Star Sign Compatibility
              </Text>
            </Box>

            <Box flex={1}>
              <FlatList
                data={DATA}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={ListHeader}
                columnWrapperStyle={{paddingHorizontal: M}}
              />
            </Box>

            <Box
              paddingTop="xs"
              alignItems="center"
              flexDirection="row"
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
          </Box>
        </SafeAreaView>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default RoomSheet;

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowRadius: 6,
    shadowOpacity: 0.33,
    backgroundColor: '#000',
    shadowColor: 'rgb(199, 199, 199)',
    shadowOffset: {
      width: 0,
      height: -2,
    },
  },
});
