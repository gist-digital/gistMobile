import {
  INTRO,
  LOGIN,
  REGISTER,
  REGISTRATION_INTRO,
  //
  HOME,
} from '@src/utils/constants';

export type AuthStackParamList = {
  [INTRO]: undefined;
  [LOGIN]: undefined;
  [REGISTER]: undefined;
  [REGISTRATION_INTRO]: undefined;
};

export type AppStackParamList = {
  [HOME]: undefined;
};
