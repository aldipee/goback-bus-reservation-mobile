import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

const Button = ({label, onPress, buttonType}) => {
  const styles = StyleSheet.create({
    containers: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.DODGER_BLUE,
      marginBottom: 12,
      paddingVertical: 12,
      borderRadius: 4,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'rgba(255,255,255,0.7)',
    },
    containersRegister: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.width,
      marginBottom: 12,
      paddingVertical: 12,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: colors.DODGER_BLUE,
    },
    text: {
      color: colors.WHITE,
      textAlign: 'center',
      height: 20,
      fontWeight: 'bold',
    },
    textRegister: {
      color: colors.DODGER_BLUE,
      textAlign: 'center',
      height: 20,
      fontWeight: 'bold',
    },
  });
  return (
    <TouchableOpacity
      style={
        buttonType === 'login' ? styles.containers : styles.containersRegister
      }
      onPress={onPress}>
      <Text style={buttonType === 'login' ? styles.text : styles.textRegister}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
