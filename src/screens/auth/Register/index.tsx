import React, {FC, useState} from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import {
  Box,
  Text,
  ScrollView,
  SafeAreaView,
  RegistrationStep1,
  RegistrationStep2,
  KeyboardAvoidingView,
} from '@src/components';
import {dummyFunc} from '@src/utils/helpers';
import {XL8, XXS, PRIMARY_MEDIUM_FONT} from '@src/utils/constants';

const initialLayout = {width: Dimensions.get('window').width};
const routesInitialState = [
  {key: 'first', title: 'Step1'},
  {key: 'second', title: 'Step2'},
  {key: 'third', title: 'Step3'},
];

const TabBar: FC<{activeIndex: number}> = ({activeIndex}) => {
  return (
    <Box marginTop="xl9" marginBottom="xl8" flexDirection="row">
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
    <>
      <Text variant="h2" color="light" fontFamily={PRIMARY_MEDIUM_FONT}>
        What’s your name and email?
      </Text>
      <RegistrationStep1 handleSubmit={dummyFunc} />
    </>
  );
};

const Step2: FC = () => {
  return (
    <>
      <Text variant="h2" color="light" fontFamily={PRIMARY_MEDIUM_FONT}>
        Create your Gist username and password
      </Text>
      <RegistrationStep2 handleSubmit={dummyFunc} />
    </>
  );
};

const Step3: FC = () => {
  return (
    <>
      <Text variant="h2" color="light" fontFamily={PRIMARY_MEDIUM_FONT}>
        We recommend you listen to…
      </Text>
    </>
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
        <ScrollView>
          <Box flex={1} paddingHorizontal="l" paddingVertical="xl6">
            <TabView
              onIndexChange={setIndex}
              renderScene={renderScene}
              initialLayout={initialLayout}
              navigationState={{index, routes}}
              renderTabBar={() => <TabBar activeIndex={index} />}
            />
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
