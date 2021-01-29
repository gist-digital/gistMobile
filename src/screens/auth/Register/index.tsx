import React, {FC, useState} from 'react';
import {Dimensions} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {TabView, SceneMap} from 'react-native-tab-view';

import {
  Box,
  Text,
  Image,
  Button,
  FlatList,
  ScrollView,
  SafeAreaView,
  RegistrationStep1,
  RegistrationStep2,
  KeyboardAvoidingView,
} from '@src/components';
import {
  XL6,
  XL8,
  XXS,
  PRIMARY_REGULAR_FONT,
  PRIMARY_MEDIUM_FONT,
} from '@src/utils/constants';
import {Theme} from '@src/styles/theme';
import {dummyFunc} from '@src/utils/helpers';

const initialLayout = {width: Dimensions.get('window').width};
const routesInitialState = [
  {key: 'first', title: 'Step1'},
  {key: 'second', title: 'Step2'},
  {key: 'third', title: 'Step3'},
];

const Item = () => {
  const theme = useTheme<Theme>();
  const {full} = theme.borderRadii;

  return (
    <Box
      marginBottom="m"
      flexDirection="row"
      marginHorizontal="-s"
      justifyContent="center">
      <Box paddingHorizontal="s" width="65%" flexDirection="row">
        <Image
          width={XL6}
          height={XL6}
          borderRadius={full}
          source={{uri: 'https://source.unsplash.com/C8Ta0gwPbQg/96x96'}}
        />

        <Box marginLeft="s">
          <Text
            color="light"
            variant="bodyM"
            marginBottom="xxs"
            fontFamily={PRIMARY_REGULAR_FONT}>
            Sophia Arthur
          </Text>

          <Text variant="bodyM" color="light" fontFamily={PRIMARY_REGULAR_FONT}>
            @Sophia_A
          </Text>
        </Box>
      </Box>

      <Box
        width="35%"
        flexShrink={0}
        paddingHorizontal="s"
        justifyContent="center">
        <Button
          onPress={dummyFunc}
          label="Following"
          type="secondary"
          size="s"
        />
      </Box>
    </Box>
  );
};

const ListHeaderComponent: FC = () => (
  <Box paddingTop="xl8" paddingBottom="m">
    <Text variant="h2" color="light" fontFamily={PRIMARY_MEDIUM_FONT}>
      We recommend you listen to…
    </Text>
  </Box>
);

const TabBar: FC<{activeIndex: number}> = ({activeIndex}) => {
  return (
    <Box paddingHorizontal="l" marginTop="xl9" flexDirection="row">
      <Box
        width={XL8}
        height={XXS}
        borderRadius="m"
        backgroundColor="primary"
      />
      <Box
        width={XL8}
        height={XXS}
        borderRadius="m"
        marginHorizontal="s"
        backgroundColor={activeIndex >= 1 ? 'primary' : 'grey2'}
      />
      <Box
        width={XL8}
        height={XXS}
        borderRadius="m"
        backgroundColor={activeIndex === 2 ? 'primary' : 'grey2'}
      />
    </Box>
  );
};

const Step1: FC = () => {
  return (
    <ScrollView>
      <Box paddingTop="xl8" paddingHorizontal="m">
        <Text variant="h2" color="light" fontFamily={PRIMARY_MEDIUM_FONT}>
          What’s your name and email?
        </Text>
        <RegistrationStep1 handleSubmit={dummyFunc} />
      </Box>
    </ScrollView>
  );
};

const Step2: FC = () => {
  return (
    <ScrollView>
      <Box paddingTop="xl8" paddingHorizontal="m">
        <Text variant="h2" color="light" fontFamily={PRIMARY_MEDIUM_FONT}>
          Create your Gist username and password
        </Text>
        <RegistrationStep2 handleSubmit={dummyFunc} />
      </Box>
    </ScrollView>
  );
};

const Step3: FC = () => {
  const DATA = Array.from({length: 20}).map((_, i) => ({
    id: `${i}`,
    name: 'First Item',
    avatar: 'First Item',
    isFollowing: false,
    username: 'First Item',
  }));

  const renderItem = () => <Item />;

  return (
    <Box paddingHorizontal="m" flex={1}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={(item) => item.id}
      />

      <Box marginTop="m" marginBottom="xl">
        <Button onPress={dummyFunc} label="Next" type="outline" />
      </Box>
    </Box>
  );
};

const Register = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState(routesInitialState);

  const renderScene = SceneMap({
    first: Step1,
    second: Step2,
    third: Step3,
  });

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Box flex={1}>
          <TabView
            onIndexChange={setIndex}
            renderScene={renderScene}
            initialLayout={initialLayout}
            navigationState={{index, routes}}
            renderTabBar={() => <TabBar activeIndex={index} />}
          />
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
