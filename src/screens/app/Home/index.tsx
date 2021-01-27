import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Box,
  Icon,
  Button,
  RoomItem,
  Gradient,
  FlatList,
  MaskedView,
  SafeAreaView,
} from '@src/components';
import {RoomItemProps} from '@src/interfaces/content';
import {roomData, dummyFunc} from '@src/utils/helpers';
import {HomeScreenProps} from '@src/interfaces/navigation';
import {XXS, S, M, NOTIFICATIONS, BTN_TAP_OPACITY} from '@src/utils/constants';

const StartRoomIcon: FC = () => {
  const iconDimension = XXS + S;

  return (
    <Box marginRight="xs">
      <Icon width={iconDimension} height={iconDimension} name="home" />
    </Box>
  );
};

const Item: FC<RoomItemProps> = ({type, host, title}) => (
  <Box paddingHorizontal="l" marginBottom="m">
    <RoomItem type={type} host={host} title={title} />
  </Box>
);

const MaskedElement: FC = () => {
  return <Box height={M} backgroundColor="dark" />;
};

const Home = ({navigation}: HomeScreenProps) => {
  const goToNotificationsScreen = () => {
    navigation.navigate(NOTIFICATIONS);
  };

  const renderItem = ({item}: {item: RoomItemProps}) => (
    <Item type={item.type} host={item.host} title={item.title} />
  );

  return (
    <SafeAreaView>
      <Box flex={1} position="relative">
        <FlatList
          data={roomData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{paddingTop: S}}
        />

        <Box height={M} bottom={0} width="100%" position="absolute">
          <MaskedView element={<MaskedElement />}>
            <Gradient
              colors={['transparent', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 1)']}
            />
          </MaskedView>
        </Box>
      </Box>

      <Box paddingHorizontal="l" paddingBottom="xl">
        <Box
          flexWrap="wrap"
          flexDirection="row"
          alignItems="center"
          marginHorizontal="-s"
          justifyContent="flex-end">
          <Box width="60%" paddingHorizontal="s">
            <Button
              onPress={dummyFunc}
              label="Start room"
              icon={<StartRoomIcon />}
            />
          </Box>

          <Box
            width="20%"
            alignItems="center"
            flexDirection="row"
            paddingHorizontal="s"
            justifyContent="center">
            <TouchableOpacity
              activeOpacity={BTN_TAP_OPACITY}
              onPress={goToNotificationsScreen}>
              <Icon name="bell" />
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
