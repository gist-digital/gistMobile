import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';

import {ImageProps} from '@src/interfaces/content';

const Image: FC<ImageProps> = ({
  width,
  height,
  source,
  borderRadius = 0,
  resizeMode = 'cover',
}) => {
  return (
    <FastImage
      source={source}
      resizeMode={resizeMode}
      style={{width, height, borderRadius}}
    />
  );
};

export default Image;
