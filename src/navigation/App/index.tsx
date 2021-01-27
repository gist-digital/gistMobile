import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  L,
  HOME,
  SEARCH,
  PROFILE,
  SETTINGS,
  NOTIFICATIONS,
  BTN_TAP_OPACITY,
} from '@src/utils/constants';
import {
  AppStackParamList,
  HeaderNavigationProps,
} from '@src/interfaces/navigation';
import {Header, Icon} from '@src/components';
import {Home, Search, Profile, Settings, Notifications} from '@src/screens';

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

const App = () => {
  return (
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
        name={NOTIFICATIONS}
        component={Notifications}
        options={{
          title: NOTIFICATIONS,
          header: (props) => (
            <Header {...props} LeftEl={<BackButton />} RightEl={null} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
