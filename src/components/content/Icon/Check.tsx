import React, {FC} from 'react';
import {SvgXml} from 'react-native-svg';

import {IconsSVGProps} from '@src/interfaces/content';

const SVG: FC<IconsSVGProps> = ({width, height, color}) => {
  const xmlString = `<svg
  fill="none"
  stroke-width="3"
  stroke="${color}"
  viewBox="0 0 24 24"
  stroke-linecap="round"
  stroke-linejoin="round"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M20 6L9 17l-5-5" />
</svg>`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
