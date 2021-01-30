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
  <path d="M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8" />
  <path fill="${color}" d="M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6" />
</svg>`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
