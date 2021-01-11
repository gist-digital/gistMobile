import React, {FC} from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {RFValue} from 'react-native-responsive-fontsize';

import Box from '../../content/Box';
import Text from '../../content/Text';
import {Theme} from '@src/styles/theme';
import {TextFieldProps} from '@src/interfaces/inputs';
import {PRIMARY_MEDIUM_FONT, PRIMARY_REGULAR_FONT} from '@src/utils/constants';

const TextInput: FC<TextFieldProps> = ({
  value,
  error,
  onBlur,
  placeholder,
  onChangeText,
  marginBottom = undefined,
  secureTextEntry = false,
}) => {
  const theme = useTheme<Theme>();
  const {light} = theme.colors;
  const {bodyL} = theme.textVariants;

  const isInvalid = !!error;
  const inputInline = {
    color: light,
    fontSize: bodyL.fontSize,
    fontFamily: PRIMARY_MEDIUM_FONT,
  };

  return (
    <Box marginBottom={marginBottom}>
      <Box
        paddingVertical="s"
        borderBottomWidth={RFValue(1)}
        marginBottom={isInvalid ? 'xs' : undefined}
        borderBottomColor={isInvalid ? 'alt' : 'grey1'}>
        <RNTextInput
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={light}
          secureTextEntry={secureTextEntry}
          style={[styles.input, inputInline]}
        />
      </Box>

      {isInvalid ? (
        <Text variant="bodyS" color="alt" fontFamily={PRIMARY_REGULAR_FONT}>
          {error}
        </Text>
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: '100%',
  },
});

export default TextInput;
