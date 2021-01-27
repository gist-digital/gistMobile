import React, {FC} from 'react';
import {SectionList as RNSectionList, SectionListProps} from 'react-native';

const SectionList: FC<Omit<SectionListProps<any>, 'style'>> = ({
  showsVerticalScrollIndicator = false,
  ...props
}) => {
  return (
    <RNSectionList
      {...props}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    />
  );
};

export default SectionList;
