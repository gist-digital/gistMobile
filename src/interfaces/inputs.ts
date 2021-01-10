import {ReactNode} from 'react';
import {
  SpacingProps,
  BorderProps,
  LayoutProps,
  BackgroundColorProps,
} from '@shopify/restyle';

import {Theme} from '@src/styles/theme';

export type BaseButtonProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void;
  };

export type ButtonProps = Pick<BaseButtonProps, 'onPress'> & {
  label: string;
  size?: 's' | 'm';
  icon?: ReactNode;
  type?: 'primary' | 'secondary' | 'outline';
};
