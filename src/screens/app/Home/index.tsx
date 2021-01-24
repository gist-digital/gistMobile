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
import {dummyFunc} from '@src/utils/helpers';
import {RoomItemProps} from '@src/interfaces/content';
import {XXS, S, M, BTN_TAP_OPACITY} from '@src/utils/constants';

const StartRoomIcon: FC = () => {
  const iconDimension = XXS + S;

  return (
    <Box marginRight="xs">
      <Icon width={iconDimension} height={iconDimension} name="home" />
    </Box>
  );
};

const data = [
  {
    id: '01',
    type: 'idea',
    host: '@Sophia_A',
    title: 'Late Night Conversations 🌚',
  },
  {
    id: '02',
    type: 'story',
    host: '@MayaJ',
    title: 'Mental Health: How to find the right therapist  💪',
  },
  {
    id: '03',
    type: 'trending',
    host: '@JackT',
    title: 'How can we effect change in Nigeria #EndSars ✊🏾',
  },
  {
    id: '04',
    type: 'fiction',
    host: '@JackT',
    title:
      'Are you a poet or a writer? | Tips for writing your next best seller',
  },
];
const Item: FC<RoomItemProps> = ({type, host, title}) => (
  <Box paddingHorizontal="l" marginBottom="m">
    <RoomItem type={type} host={host} title={title} />
  </Box>
);

const MaskedElement: FC = () => {
  return <Box height={M} backgroundColor="dark" />;
};

const Home = () => {
  const renderItem = ({item}: {item: RoomItemProps}) => (
    <Item type={item.type} host={item.host} title={item.title} />
  );

  return (
    <SafeAreaView>
      <Box flex={1} position="relative">
        <FlatList
          data={data}
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
              onPress={dummyFunc}
              activeOpacity={BTN_TAP_OPACITY}>
              <Icon name="bell" />
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
