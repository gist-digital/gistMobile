import React, {FC} from 'react';
import LG from 'react-native-linear-gradient';

import {GradientProps} from '@src/interfaces/content';

const Gradient: FC<GradientProps> = ({
  children,
  colors = ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.8)'],
}) => {
  return (
    <LG style={{flex: 1}} colors={colors}>
      {children}
    </LG>
  );
};

export default Gradient;
