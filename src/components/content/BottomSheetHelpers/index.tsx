import React from 'react';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {BottomSheetBackgroundProps} from '@gorhom/bottom-sheet';

import Box from '../Box';

export const BottomSheetBackground = ({style}: BottomSheetBackgroundProps) => {
  return (
    <Box
      style={style}
      borderTopLeftRadius="m"
      backgroundColor="grey2"
      borderTopRightRadius="m"
    />
  );
};

export const BottomSheetHandle = () => {
  return (
    <Box position="relative">
      <Box
        paddingTop="s"
        alignItems="center"
        style={styles.shadow}
        backgroundColor="dark"
        borderTopLeftRadius="m"
        borderTopRightRadius="m">
        <Box
          borderRadius="full"
          width={RFValue(40)}
          height={RFValue(4)}
          backgroundColor="grey2"
        />
      </Box>

      <Box
        bottom={0}
        width="100%"
        marginBottom="-xs"
        height={RFValue(8)}
        position="absolute"
        backgroundColor="dark"
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowRadius: 6,
    shadowOpacity: 0.33,
    backgroundColor: '#000',
    shadowColor: 'rgb(199, 199, 199)',
    shadowOffset: {
      width: 0,
      height: -2,
    },
  },
});
