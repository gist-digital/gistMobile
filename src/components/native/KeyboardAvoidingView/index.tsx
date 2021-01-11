import React, {FC} from 'react';
import {
  Platform,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
} from 'react-native';

const KeyboardAvoidingView: FC<Omit<KeyboardAvoidingViewProps, 'style'>> = ({
  children,
  behavior = Platform.OS === 'ios' ? 'padding' : 'height',
  ...props
}) => {
  return (
    <RNKeyboardAvoidingView behavior={behavior} style={{flex: 1}} {...props}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

export default KeyboardAvoidingView;
