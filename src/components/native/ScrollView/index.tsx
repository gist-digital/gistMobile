import React, {FC} from 'react';
import {ScrollView as RNScrollView, ScrollViewProps} from 'react-native';

const ScrollView: FC<
  Omit<ScrollViewProps, 'style' | 'contentContainerStyle'>
> = ({children, showsVerticalScrollIndicator = false, ...props}) => {
  return (
    <RNScrollView
      {...props}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}>
      {children}
    </RNScrollView>
  );
};

export default ScrollView;
