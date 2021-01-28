import {StackNavigationProp} from '@react-navigation/stack';
import {
  INTRO,
  LOGIN,
  REGISTER,
  REGISTRATION_INTRO,
  //
  HOME,
  SEARCH,
  PROFILE,
  SETTINGS,
  NOTIFICATIONS,
  AVATAR_UPDATE,
  NOTIFICATIONS_FREQUENCY,
} from '@src/utils/constants';

export type AuthStackParamList = {
  [INTRO]: undefined;
  [LOGIN]: undefined;
  [REGISTER]: undefined;

  [REGISTRATION_INTRO]: undefined;
};

export type AppStackParamList = {
  [HOME]: undefined;
  [SEARCH]: undefined;
  [PROFILE]: undefined;
  [SETTINGS]: undefined;
  [NOTIFICATIONS]: undefined;
  [AVATAR_UPDATE]: undefined;
  [NOTIFICATIONS_FREQUENCY]: undefined;
};

export type HeaderNavigationProps = StackNavigationProp<
  AppStackParamList,
  'Home' | 'Search'
>;

export type HomeScreenProps = {
  navigation: StackNavigationProp<AppStackParamList, 'Home'>;
};

export type ProfileScreenProps = {
  navigation: StackNavigationProp<AppStackParamList, 'Profile'>;
};

export type SettingsNavigationProps = StackNavigationProp<
  AppStackParamList,
  'Settings'
>;
