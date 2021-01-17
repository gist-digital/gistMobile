import React, {FC} from 'react';
import LG from 'react-native-linear-gradient';

const Gradient: FC = ({children}) => {
  const topBottom = ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)'];
  // ['#4c669f', '#3b5998', '#192f6a']

  return <LG colors={topBottom}>{children}</LG>;
};

export default Gradient;
