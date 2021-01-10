import React, {FC} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import Base from './Base';
import Text from '../../content/Text';
import {ButtonProps} from '@src/interfaces/inputs';
import {L, XL6, PRIMARY_MEDIUM_FONT} from '@src/utils/constants';

export const Button: FC<ButtonProps> = ({
  onPress,
  label,
  size = 'm',
  icon = null,
  type = 'primary',
}) => {
  const isPrimary = type === 'primary';
  const isSecondary = type === 'secondary';

  const isSmall = size === 's';

  return (
    <Base
      borderRadius="m"
      onPress={onPress}
      borderWidth={RFValue(2)}
      height={isSmall ? L : XL6}
      borderColor={isPrimary ? 'primary' : isSecondary ? 'light' : 'grey1'}
      backgroundColor={
        isPrimary ? 'primary' : isSecondary ? 'light' : 'transparent'
      }>
      {icon}
      <Text
        textAlign="center"
        fontFamily={PRIMARY_MEDIUM_FONT}
        variant={isSmall ? 'bodyS' : 'bodyL'}
        color={isPrimary ? 'light' : isSecondary ? 'primaryAccent' : 'light'}>
        {label}
      </Text>
    </Base>
  );
};

export default Button;
