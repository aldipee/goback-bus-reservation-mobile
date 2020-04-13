import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
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
  const {
    styles,
    label,
    icon,
    onBlur,
    rightIcon,
    placeholder,
    ...otherProps
  } = props;
  return (
    <Input
      {...otherProps}
      autoCapitalize="false"
      inputStyle={{fontSize: 15, paddingBottom: 5}}
      inputContainerStyle={{
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 3,
        borderColor: colors.MAIN_GREY,
      }}
      leftIconContainerStyle={{
        marginLeft: 5,
        marginRight: 10,
        paddingBottom: 0,
      }}
      onBlur={onBlur}
      labelStyle={{fontSize: 13, marginBottom: 4}}
      containerStyle={{paddingBottom: 10, marginTop: 10}}
      label={label}
      placeholder={placeholder}
      leftIcon={<Icon name={icon} size={24} color={colors.SECOND_BLUE} />}
      rightIcon={<Icon name={rightIcon} size={24} color={colors.MAIN_GREY} />}
    />
  );
}
