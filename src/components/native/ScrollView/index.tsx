import React, {FC} from 'react';
import {ScrollView as RNScrollView, ScrollViewProps} from 'react-native';

const ScrollView: FC<Omit<ScrollViewProps, 'style'>> = ({
  children,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  ...props
}) => {
  const defaultStyle = {flexGrow: 1};

  return (
    <RNScrollView
      {...props}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      contentContainerStyle={contentContainerStyle || defaultStyle}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}>
      {children}
    </RNScrollView>
  );
};

export default ScrollView;
