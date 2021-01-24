import React, {FC} from 'react';
import {FlatList as RNFlatList, FlatListProps} from 'react-native';

const FlatList: FC<Omit<FlatListProps<any>, 'style'>> = ({
  showsVerticalScrollIndicator = false,
  ...props
}) => {
  return (
    <RNFlatList
      {...props}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    />
  );
};

export default FlatList;
