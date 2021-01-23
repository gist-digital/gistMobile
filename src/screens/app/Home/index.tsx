import React from 'react';

import {
  Box,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
} from '@src/components';

const Home = () => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView>
          <Box flex={1}>
            <Text color="light">asas</Text>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;
