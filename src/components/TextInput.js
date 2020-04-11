import React from 'react';
import {StyleSheet, TextInput, Dimensions} from 'react-native';
import colors from '../config/colors';

export default function Text(props) {
  const localStyles = StyleSheet.create({
    textInput: {
      height: 50,
      borderColor: colors.SILVER,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderRightWidth: StyleSheet.hairlineWidth,
      borderLeftWidth: StyleSheet.hairlineWidth,
      marginBottom: 20,
      paddingLeft: 40,
      padding: 13,
      fontSize: 15,
    },
  });
  const {styles, ...otherProps} = props;
  return (
    <TextInput
      autoCapitalize="none"
      style={localStyles.textInput}
      selectionColor={colors.DODGER_BLUE}
      {...otherProps}
    />
  );
}
