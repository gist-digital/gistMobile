import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  spacing,
  border,
  layout,
  useRestyle,
  backgroundColor,
} from '@shopify/restyle';

import {BTN_TAP_OPACITY} from '@src/utils/constants';
import {BaseButtonProps} from '@src/interfaces/inputs';
import Box from '../../content/Box';

const restyleFunctions = [spacing, border, layout, backgroundColor];

const Button: FC<BaseButtonProps> = ({onPress, children, ...rest}) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={BTN_TAP_OPACITY}>
      <Box
        {...props}
        position="relative"
        alignItems="center"
        flexDirection="row"
        justifyContent="center">
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
