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
  BIO_UPDATE,
  AVATAR_UPDATE,
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
  [BIO_UPDATE]: undefined;
  [AVATAR_UPDATE]: undefined;
  [NOTIFICATIONS]: undefined;
  [NOTIFICATIONS_FREQUENCY]: undefined;
};

export type IntroScreenProps = {
  navigation: StackNavigationProp<AuthStackParamList, 'Intro'>;
};

export type RegistrationIntroScreenProps = {
  navigation: StackNavigationProp<AuthStackParamList, 'RegistrationIntro'>;
};

export type LoginScreenProps = {
  navigation: StackNavigationProp<AuthStackParamList, 'Login'>;
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

export type RoomSheetDisplay = 'hidden' | 'mini' | 'full';
