import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';

import {ImageProps} from '@src/interfaces/content';

const Image: FC<ImageProps> = ({
  width,
  height,
  source,
  resizeMode = 'cover',
}) => {
  return (
    <FastImage
      source={source}
      style={{width, height}}
      resizeMode={resizeMode}
    />
  );
};

export default Image;
