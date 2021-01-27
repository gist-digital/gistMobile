import {ReactElement} from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {ResizeMode, ImageStyle, Source} from 'react-native-fast-image';

import {primaryTheme} from '@src/styles/theme';

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
  | 'cog'
  | 'home'
  | 'logo'
  | 'search';

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
