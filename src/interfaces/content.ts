import {ResizeMode, Source} from 'react-native-fast-image';

export type ImageProps = {
  source: number | Source;
  width: number;
  height: number;
  resizeMode?: ResizeMode;
};
