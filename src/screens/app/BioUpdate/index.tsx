import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {XL10, BODY_M} from '@src/utils/constants';
import {dummyFunc} from '@src/utils/helpers';
import {PRIMARY_REGULAR_FONT, PRIMARY_MEDIUM_FONT} from '@src/utils/constants';
import {
  Box,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from '@src/components';

const BioUpdate = () => {
  const avatarDimension = XL10 * 2;

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView>
          <Box flex={1} paddingTop="m" paddingHorizontal="l">
            <Text
              color="light"
              variant="bodyL"
              textAlign="center"
              fontFamily={PRIMARY_MEDIUM_FONT}>
              Update your bio
            </Text>

            <Box marginTop="xl8" marginBottom="xl12">
              <Box
                padding="s"
                borderRadius="s"
                borderColor="light"
                borderWidth={RFValue(1)}
                style={{height: RFValue(160)}}>
                <TextInput
                  multiline
                  style={styles.input}
                  onChangeText={dummyFunc}
                  defaultValue={`Hi, I’m Meena. I’m a law student and the CEO of beatbox.
                  \n Interests: Beauty & Law`}
                />
              </Box>
            </Box>

            <Box alignItems="center" paddingTop="m">
              <Box width={avatarDimension}>
                <Button label="Done" onPress={dummyFunc} />
              </Box>
            </Box>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: '100%',
    fontSize: BODY_M,
    color: '#ffffff',
    textAlignVertical: 'top',
    fontFamily: PRIMARY_REGULAR_FONT,
  },
});

export default BioUpdate;
