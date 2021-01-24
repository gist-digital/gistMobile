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
  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
</svg>`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
