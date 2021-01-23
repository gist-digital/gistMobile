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
  <circle cx="11" cy="11" r="8" />
  <path d="M21 21l-4.35-4.35" />
</svg>`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
