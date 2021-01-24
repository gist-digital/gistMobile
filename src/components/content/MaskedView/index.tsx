import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import MView from '@react-native-community/masked-view';

import {MaskedViewProps} from '@src/interfaces/content';

const MaskedView: FC<MaskedViewProps> = ({children, element}) => {
  return (
    <MView style={styles.container} maskElement={element}>
      {children}
    </MView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default MaskedView;
