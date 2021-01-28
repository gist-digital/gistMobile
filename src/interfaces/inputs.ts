import {ReactNode} from 'react';
import {TextInputProps as RNTextInputProps} from 'react-native';
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
    disabled?: boolean;
  };

export type ButtonProps = Pick<BaseButtonProps, 'onPress' | 'disabled'> & {
  label: string;
  size?: 's' | 'm';
  icon?: ReactNode;
  type?: 'primary' | 'secondary' | 'outline';
};

export type TextFieldProps = Pick<SpacingProps<Theme>, 'marginBottom'> &
  Pick<
    RNTextInputProps,
    'onChangeText' | 'onBlur' | 'value' | 'placeholder' | 'secureTextEntry'
  > & {
    error?: string;
  };

export type RadioInput = {
  checked: boolean;
  size?: 'm' | 'l';
};
