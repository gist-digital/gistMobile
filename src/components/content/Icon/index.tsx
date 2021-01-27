import React, {FC} from 'react';
import {useTheme} from '@shopify/restyle';

import {M} from '@src/utils/constants';
import {Theme} from '@src/styles/theme';
import {IconProps} from '@src/interfaces/content';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Bell from './Bell';
import Check from './Check';
import Cog from './Cog';
import Home from './Home';
import Logo from './Logo';
import Search from './Search';

const Icon: FC<IconProps> = ({
  name,
  width = M,
  height = M,
  color = 'light',
}) => {
  const theme = useTheme<Theme>();
  const xmlColor = theme.colors[color];

  switch (name) {
    case 'arrow_left':
      return <ArrowLeft width={width} height={height} color={xmlColor} />;

    case 'arrow_right':
      return <ArrowRight width={width} height={height} color={xmlColor} />;

    case 'bell':
      return <Bell width={width} height={height} color={xmlColor} />;

    case 'check':
      return <Check width={width} height={height} color={xmlColor} />;

    case 'cog':
      return <Cog width={width} height={height} color={xmlColor} />;

    case 'home':
      return <Home width={width} height={height} color={xmlColor} />;

    case 'logo':
      return <Logo width={width} height={height} color={xmlColor} />;

    case 'search':
      return <Search width={width} height={height} color={xmlColor} />;

    default:
      return null;
  }
};

export default Icon;
