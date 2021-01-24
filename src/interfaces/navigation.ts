import {StackNavigationProp} from '@react-navigation/stack';
import {
  INTRO,
  LOGIN,
  REGISTER,
  REGISTRATION_INTRO,
  //
  HOME,
  SEARCH,
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
};

export type HeaderNavigationProps = StackNavigationProp<
  AppStackParamList,
  'Home' | 'Search'
>;
