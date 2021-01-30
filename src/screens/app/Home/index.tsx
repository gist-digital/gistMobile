import React, {FC, useCallback, useRef, useState, useEffect} from 'react';
import {StyleSheet, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
} from '@gorhom/bottom-sheet';
import {useTheme} from '@shopify/restyle';

import {
  Box,
  Icon,
  Text,
  Image,
  Radio,
  Button,
  RoomItem,
  Gradient,
  FlatList,
  MaskedView,
  SafeAreaView,
  KeyboardAvoidingView,
} from '@src/components';
import {Theme} from '@src/styles/theme';
import {roomData, dummyFunc} from '@src/utils/helpers';
import {RoomItemProps} from '@src/interfaces/content';
import {HomeScreenProps} from '@src/interfaces/navigation';
import {
  XXS,
  S,
  M,
  XL6,
  XL10,
  BODY_M,
  NOTIFICATIONS,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';

const snapPoints = [0, '60%', '100%'];

const BottomSheetBackground = ({style}: BottomSheetBackgroundProps) => {
  return (
    <Box
      style={style}
      borderTopLeftRadius="m"
      backgroundColor="grey2"
      borderTopRightRadius="m"
    />
  );
};

const StartRoomIcon: FC = () => {
  const iconDimension = XXS + S;

  return (
    <Box marginRight="xs">
      <Icon width={iconDimension} height={iconDimension} name="home" />
    </Box>
  );
};

const SuggestionItem = () => {
  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;

  return (
    <Box
      marginBottom="m"
      flexDirection="row"
      marginHorizontal="-s"
      justifyContent="center">
      <Box paddingHorizontal="s" width="65%" flexDirection="row">
        <Image
          width={XL6}
          height={XL6}
          borderRadius={full}
          source={{uri: 'https://source.unsplash.com/C8Ta0gwPbQg/96x96'}}
        />

        <Box marginLeft="s">
          <Text
            color="light"
            variant="bodyM"
            marginBottom="xxs"
            fontFamily={PRIMARY_REGULAR_FONT}>
            Sophia Arthur
          </Text>

          <Text variant="bodyM" color="light" fontFamily={PRIMARY_REGULAR_FONT}>
            @Sophia_A
          </Text>
        </Box>
      </Box>

      <Box
        width="35%"
        flexShrink={0}
        alignItems="flex-end"
        paddingHorizontal="s"
        justifyContent="center">
        <Radio size="l" checked={true} />
      </Box>
    </Box>
  );
};

const Item: FC<RoomItemProps> = ({type, host, title}) => (
  <Box paddingHorizontal="m" marginBottom="m">
    <RoomItem type={type} host={host} title={title} />
  </Box>
);

const MaskedElement: FC = () => {
  return <Box height={M} backgroundColor="dark" />;
};

const TopicSheet: FC<{
  openPingSheet: () => void;
  isKeyboardVisible: boolean;
  snapTo?: (index: number) => void;
}> = ({snapTo, openPingSheet, isKeyboardVisible}) => {
  const dismissKeyboard = (index = 1) => {
    Keyboard.dismiss();

    if (snapTo) {
      snapTo(index);
    }
  };

  const showPingSheet = () => {
    dismissKeyboard(0);
    openPingSheet();
  };

  return (
    <Box height="100%" padding="m" backgroundColor="dark">
      <Text
        variant="bodyL"
        color="light"
        marginBottom="m"
        fontFamily={PRIMARY_MEDIUM_FONT}>
        What’s your room topic?
      </Text>

      {isKeyboardVisible && (
        <Box
          backgroundColor="transparent"
          style={{...StyleSheet.absoluteFillObject}}>
          <TouchableOpacity
            activeOpacity={BTN_TAP_OPACITY}
            onPress={() => dismissKeyboard()}
            style={styles.keyboardActiveOverlay}
          />
        </Box>
      )}

      <Box height={XL10} padding="xs" borderRadius="xs" backgroundColor="grey2">
        <TextInput
          multiline
          returnKeyType="done"
          style={styles.input}
          onChangeText={dummyFunc}
          defaultValue="E.g. Mental Health: How to find the right therapist  💪"
        />
      </Box>

      <Box
        marginTop="xl"
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        marginHorizontal="-s"
        justifyContent="center">
        <Box width="60%" paddingHorizontal="s">
          <Button
            label="Invite people"
            onPress={showPingSheet}
            icon={<StartRoomIcon />}
          />
        </Box>
      </Box>
    </Box>
  );
};

const PingSheet: FC = () => {
  const theme = useTheme<Theme>();
  const {grey1} = theme.colors;
  const {bodyM} = theme.textVariants;

  const iconDimension = S + XXS;
  const inputInline = {
    color: grey1,
    fontSize: bodyM.fontSize,
    fontFamily: PRIMARY_REGULAR_FONT,
  };

  const DATA = Array.from({length: 20}).map((_, i) => ({
    id: `${i}`,
    name: 'First Item',
    avatar: 'First Item',
    isFollowing: false,
    username: 'First Item',
  }));

  const renderItem = () => <SuggestionItem />;

  return (
    <Box padding="m" height="100%" backgroundColor="dark">
      <Text
        color="light"
        variant="bodyL"
        marginBottom="s"
        fontFamily={PRIMARY_MEDIUM_FONT}>
        Start room with…
      </Text>

      <Box
        height={XL6}
        marginBottom="xs"
        borderRadius="s"
        flexDirection="row"
        alignItems="center"
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
            onChangeText={dummyFunc}
            placeholderTextColor={grey1}
            style={[styles.searchInput, inputInline]}
          />
        </Box>
      </Box>

      <Box flex={1} position="relative">
        <BottomSheetFlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: S}}
        />

        <Box height={M} bottom={0} width="100%" position="absolute">
          <MaskedView element={<MaskedElement />}>
            <Gradient
              colors={['transparent', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 1)']}
            />
          </MaskedView>
        </Box>
      </Box>

      <Box
        flexWrap="wrap"
        paddingTop="xxs"
        flexDirection="row"
        alignItems="center"
        marginHorizontal="-s"
        justifyContent="center">
        <Box width="60%" paddingHorizontal="s">
          <Button
            label="Start room"
            onPress={dummyFunc}
            icon={<StartRoomIcon />}
          />
        </Box>
      </Box>
    </Box>
  );
};

const Home = ({navigation}: HomeScreenProps) => {
  const topicSheetRef = useRef<BottomSheet>(null);
  const pingSheetRef = useRef<BottomSheet>(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        topicSheetRef?.current?.snapTo(2);
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const openTopicSheet = useCallback(
    () => topicSheetRef?.current?.snapTo(1),
    [],
  );

  const openPingSheet = useCallback(() => pingSheetRef?.current?.snapTo(2), []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      Keyboard.dismiss();
    }
  }, []);

  const goToNotificationsScreen = () => {
    navigation.navigate(NOTIFICATIONS);
  };

  const renderItem = ({item}: {item: RoomItemProps}) => (
    <Item type={item.type} host={item.host} title={item.title} />
  );

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Box flex={1} position="relative">
          <FlatList
            data={roomData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{paddingTop: S}}
          />

          <Box height={M} bottom={0} width="100%" position="absolute">
            <MaskedView element={<MaskedElement />}>
              <Gradient
                colors={[
                  'transparent',
                  'rgba(0, 0, 0, 0.5)',
                  'rgba(0, 0, 0, 1)',
                ]}
              />
            </MaskedView>
          </Box>
        </Box>

        <Box paddingHorizontal="m" paddingBottom="xl">
          <Box
            flexWrap="wrap"
            flexDirection="row"
            alignItems="center"
            marginHorizontal="-s"
            justifyContent="flex-end">
            <Box width="60%" paddingHorizontal="s">
              <Button
                label="Start room"
                onPress={openTopicSheet}
                icon={<StartRoomIcon />}
              />
            </Box>

            <Box
              width="20%"
              alignItems="center"
              flexDirection="row"
              paddingHorizontal="s"
              justifyContent="center">
              <TouchableOpacity
                activeOpacity={BTN_TAP_OPACITY}
                onPress={goToNotificationsScreen}>
                <Icon name="bell" />
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>

        {/* <BottomSheet
          index={-1}
          ref={topicSheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={BottomSheetBackdrop}
          backgroundComponent={BottomSheetBackground}>
          <BottomSheetView>
            <TopicSheet
              openPingSheet={openPingSheet}
              snapTo={topicSheetRef?.current?.snapTo}
              isKeyboardVisible={isKeyboardVisible}
            />
          </BottomSheetView>
        </BottomSheet>

        <BottomSheet
          index={-1}
          ref={pingSheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={BottomSheetBackdrop}
          backgroundComponent={BottomSheetBackground}>
          <BottomSheetView>
            <PingSheet />
          </BottomSheetView>
        </BottomSheet>*/}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    zIndex: 10,
    height: '100%',
    fontSize: BODY_M,
    color: '#B2B4B4',
    textAlignVertical: 'top',
    fontFamily: PRIMARY_REGULAR_FONT,
  },
  searchInput: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  keyboardActiveOverlay: {
    height: '100%',
  },
});

export default Home;
