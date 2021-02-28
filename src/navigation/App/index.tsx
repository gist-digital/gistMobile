import React, {FC, useRef} from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {useSharedValue} from 'react-native-reanimated';
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
} from '@gorhom/bottom-sheet';

import {
  L,
  XL8,
  HOME,
  SEARCH,
  PROFILE,
  SETTINGS,
  BIO_UPDATE,
  AVATAR_UPDATE,
  NOTIFICATIONS,
  BTN_TAP_OPACITY,
  NOTIFICATIONS_FREQUENCY,
} from '@src/utils/constants';
import {
  RoomSheetDisplay,
  AppStackParamList,
  HeaderNavigationProps,
} from '@src/interfaces/navigation';
import {Box, Icon, Header, Text, RoomSheet} from '@src/components';
import {
  Home,
  Search,
  Profile,
  Settings,
  BioUpdate,
  AvatarUpdate,
  Notifications,
  NotificationFrequency,
} from '@src/screens';

const snapPoints = ['10%', '40%', '80%'];
const Stack = createStackNavigator<AppStackParamList>();

const BackButton: FC = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={BTN_TAP_OPACITY}>
      <Icon width={L} height={L} name="arrow_left" />
    </TouchableOpacity>
  );
};

const SettingsButton: FC = () => {
  const navigation = useNavigation<HeaderNavigationProps>();
  const handleNav = () => navigation.navigate(SETTINGS);

  return (
    <TouchableOpacity onPress={handleNav} activeOpacity={BTN_TAP_OPACITY}>
      <Icon name="cog" />
    </TouchableOpacity>
  );
};

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

const App = () => {
  const pingSheetRef = useRef<BottomSheet>(null);
  // const {height} = Dimensions.get('window');
  // const MIN_APP_HEIGHT = height - XL8;

  // const roomTranslateY = useSharedValue(MIN_APP_HEIGHT);
  // const roomDisplayType = useSharedValue<RoomSheetDisplay>('mini');

  return (
    <Box flex={1}>
      <Stack.Navigator headerMode="screen" initialRouteName={HOME}>
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{title: undefined, header: Header}}
        />

        <Stack.Screen
          name={SEARCH}
          component={Search}
          options={{title: undefined, headerShown: false}}
        />

        <Stack.Screen
          name={PROFILE}
          component={Profile}
          options={{
            title: undefined,
            header: (props) => (
              <Header
                {...props}
                LeftEl={<BackButton />}
                RightEl={<SettingsButton />}
              />
            ),
          }}
        />

        <Stack.Screen
          name={SETTINGS}
          component={Settings}
          options={{
            title: undefined,
            header: (props) => (
              <Header {...props} LeftEl={<BackButton />} RightEl={null} />
            ),
          }}
        />

        <Stack.Screen
          name={BIO_UPDATE}
          component={BioUpdate}
          options={{
            title: undefined,
            header: (props) => (
              <Header {...props} LeftEl={<BackButton />} RightEl={null} />
            ),
          }}
        />

        <Stack.Screen
          name={AVATAR_UPDATE}
          component={AvatarUpdate}
          options={{
            title: undefined,
            header: (props) => (
              <Header {...props} LeftEl={<BackButton />} RightEl={null} />
            ),
          }}
        />

        <Stack.Screen
          name={NOTIFICATIONS}
          component={Notifications}
          options={{
            title: NOTIFICATIONS,
            header: (props) => (
              <Header {...props} LeftEl={<BackButton />} RightEl={null} />
            ),
          }}
        />

        <Stack.Screen
          name={NOTIFICATIONS_FREQUENCY}
          component={NotificationFrequency}
          options={{
            title: undefined,
            header: (props) => (
              <Header {...props} LeftEl={<BackButton />} RightEl={null} />
            ),
          }}
        />
      </Stack.Navigator>

      <BottomSheet
        index={0}
        ref={pingSheetRef}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}
        backgroundComponent={BottomSheetBackground}>
        <BottomSheetView>
          <Box>
            <Text>adsdsdsdsdsdsdsds</Text>
          </Box>
        </BottomSheetView>
      </BottomSheet>

      {/* <RoomSheet
        translateY={roomTranslateY}
        displayType={roomDisplayType}
        minAppHeight={MIN_APP_HEIGHT}
      /> */}
    </Box>
  );
};

export default App;
