import React, {FC} from 'react';
import {SvgXml} from 'react-native-svg';

import {IconsSVGProps} from '@src/interfaces/content';

const SVG: FC<IconsSVGProps> = ({width, height, color}) => {
  const xmlString = `<svg
  stroke="none"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0.0015182835049927235 0.0010861008195206523 17.065914154052734 15.952914237976074">
  <path
    d="M16.93 6.94L9.096.204a.855.855 0 00-1.106 0L.16 6.941a.457.457 0 00-.068.619l.192.261 1 1.294a.457.457 0 00.64.09l.022-.018.192-.162.393-.337v6.408a.855.855 0 00.854.854h2.99v-3.029a.337.337 0 01.337-.337h3.682a.337.337 0 01.337.337v3.033h2.99a.854.854 0 00.854-.854V8.692l.393.337.192.162a.457.457 0 00.642-.073l1.17-1.563a.457.457 0 00-.047-.611"
    fill="${color}"
  />
</svg>`;

  return <SvgXml xml={xmlString} width={width} height={height} />;
};

export default SVG;
