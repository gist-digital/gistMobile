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
  [NOTIFICATIONS_FREQUENCY]: undefined;
};

export type HeaderNavigationProps = StackNavigationProp<
  AppStackParamList,
  'Home' | 'Search'
>;

export type HomeScreenProps = {
  navigation: StackNavigationProp<AppStackParamList, 'Home'>;
};

export type SettingsNavigationProps = StackNavigationProp<
  AppStackParamList,
  'Settings'
>;
