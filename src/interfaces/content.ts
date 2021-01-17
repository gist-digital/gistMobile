import {ResizeMode, ImageStyle, Source} from 'react-native-fast-image';

export type ImageProps = {
  source: number | Source;
  width: number;
  height: number;
  resizeMode?: ResizeMode;
} & ImageStyle;
