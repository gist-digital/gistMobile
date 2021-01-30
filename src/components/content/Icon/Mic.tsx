import React, {FC} from 'react';
import {SvgXml} from 'react-native-svg';

import {IconsSVGProps} from '@src/interfaces/content';

const SVG: FC<IconsSVGProps> = ({width, height, color}) => {
  const xmlString = `<svg
  fill="none"
  stroke-width="2"
  stroke="${color}"
  viewBox="0 0 24 24"
  stroke-linecap="round"
  stroke-linejoin="round"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
  <path fill="${color}" d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
</svg>`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
