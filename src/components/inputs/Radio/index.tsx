import React, {FC} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import Box from '../../content/Box';
import {S, M} from '@src/utils/constants';
import Icon from '../../content/Icon';
import {RadioInput} from '@src/interfaces/inputs';

const Radio: FC<RadioInput> = ({checked}) => {
  return (
    <Box
      width={M}
      height={M}
      borderColor="light"
      borderRadius="full"
      borderWidth={RFValue(1)}>
      {checked && (
        <Box
          width="100%"
          height="100%"
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
          backgroundColor="light">
          <Icon name="check" width={S} height={S} color="primary" />
        </Box>
      )}
    </Box>
  );
};

export default Radio;
