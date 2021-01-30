import {ReactElement} from 'react';
import Animated from 'react-native-reanimated';
import {StackHeaderProps} from '@react-navigation/stack';
import {ResizeMode, ImageStyle, Source} from 'react-native-fast-image';

import {primaryTheme} from '@src/styles/theme';
import {RoomSheetDisplay} from './navigation';

export type ImageProps = {
  source: number | Source;
  width: number;
  height: number;
  resizeMode?: ResizeMode;
} & ImageStyle;

type Icons =
  | 'arrow_left'
  | 'arrow_right'
  | 'bell'
  | 'check'
  | 'cog'
  | 'home'
  | 'logo'
  | 'mic'
  | 'mic_off'
  | 'mic_off_color'
  | 'search'
  | 'star';

export type IconProps = {
  name: Icons;
  width?: number;
  height?: number;
  color?: keyof typeof primaryTheme.colors;
};

export type IconsSVGProps = Omit<IconProps, 'name' | 'color'> & {color: string};

export type HeaderProps = StackHeaderProps & {
  RightEl?: ReactElement | null;
  LeftEl?: ReactElement;
};

export type GradientProps = {
  colors?: string[];
};

export type MaskedViewProps = {
  element: ReactElement;
};

export type RoomItemProps = {
  host: string;
  title: string;
  type: 'idea' | 'story' | 'trending' | 'fiction';
};

export type RoomSheetProps = {
  minAppHeight: number;
  translateY: Animated.SharedValue<number>;
  displayType: Animated.SharedValue<RoomSheetDisplay>;
};

export type RoomAvatarProps = {
  mute: boolean;
  username: string;
  isSpeaking: boolean;
  isModerator: boolean;
};
