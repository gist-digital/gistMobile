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
  NOTIFICATIONS,
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
  [NOTIFICATIONS]: undefined;
};

export type HeaderNavigationProps = StackNavigationProp<
  AppStackParamList,
  'Home' | 'Search'
>;

export type HomeScreenProps = {
  navigation: StackNavigationProp<AppStackParamList, 'Home'>;
};
