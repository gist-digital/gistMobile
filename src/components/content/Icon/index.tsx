import React, {FC} from 'react';
import {useTheme} from '@shopify/restyle';

import {M} from '@src/utils/constants';
import {Theme} from '@src/styles/theme';
import {IconProps} from '@src/interfaces/content';

import Bell from './Bell';
import Home from './Home';
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
    case 'bell':
      return <Bell width={width} height={height} color={xmlColor} />;

    case 'home':
      return <Home width={width} height={height} color={xmlColor} />;

    case 'search':
      return <Search width={width} height={height} color={xmlColor} />;

    default:
      return null;
  }
};

export default Icon;
