import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import Box from '../Box';
import Text from '../Text';
import Image from '../Image';
import Gradient from '../Gradient';
import {RoomItemProps} from '@src/interfaces/content';
import {dummyFunc, roomColorMap} from '@src/utils/helpers';
import {
  XL,
  BTN_TAP_OPACITY,
  PRIMARY_MEDIUM_FONT,
  PRIMARY_REGULAR_FONT,
} from '@src/utils/constants';

const RoomItem: FC<RoomItemProps> = ({type, host, title}) => {
  return (
    <Box overflow="hidden" borderRadius="s">
      <TouchableOpacity onPress={dummyFunc} activeOpacity={BTN_TAP_OPACITY}>
        <Gradient colors={roomColorMap[type]}>
          <Box paddingVertical="s" paddingHorizontal="m">
            <Box flexDirection="row">
              {Array.from({length: 4}).map((_, i) => (
                <Box key={i} marginLeft={i === 0 ? undefined : '-xs'}>
                  <Image
                    width={XL}
                    height={XL}
                    borderRadius={XL / 2.5}
                    source={{
                      uri: 'https://source.unsplash.com/C8Ta0gwPbQg/96x96',
                    }}
                  />
                </Box>
              ))}

              <Box
                width={XL}
                height={XL}
                marginLeft="-xs"
                alignItems="center"
                backgroundColor="grey2"
                justifyContent="center"
                style={{borderRadius: XL / 2.5}}>
                <Text
                  variant="bodyS"
                  color="light"
                  fontFamily={PRIMARY_MEDIUM_FONT}>
                  +12
                </Text>
              </Box>
            </Box>

            <Box marginVertical="s">
              <Text
                color="light"
                variant="bodyL"
                fontFamily={PRIMARY_MEDIUM_FONT}>
                {title}
              </Text>
            </Box>

            <Box
              flexWrap="wrap"
              flexDirection="row"
              alignItems="center"
              marginHorizontal="-s">
              <Box width="65%" paddingHorizontal="s">
                <Text
                  color="light"
                  variant="bodyS"
                  fontFamily={PRIMARY_REGULAR_FONT}>
                  Hosted by {host}
                </Text>
              </Box>

              <Box width="35%" paddingHorizontal="s">
                <Text
                  color="light"
                  variant="bodyS"
                  fontFamily={PRIMARY_REGULAR_FONT}>
                  #Recorded
                </Text>
              </Box>
            </Box>
          </Box>
        </Gradient>
      </TouchableOpacity>
    </Box>
  );
};

export default RoomItem;
