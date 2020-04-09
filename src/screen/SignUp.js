import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../components/Button';
import FormTextInput from '../components/TextInput';
import strings from '../config/strings';
import styles from '../style/index';
import colors from '../config/colors';

const localStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: '90%',
    marginTop: '24%',
  },
  form: {
    marginTop: 10,
  },
  or: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: -6,
    marginBottom: 4,
    color: colors.MAIN_GREY,
    fontWeight: '200',
  },
  icon: {
    position: 'absolute',
    top: 8,
    left: 2,
  },
  con: {
    position: 'relative',
    marginTop: 10,
  },
});

export default class Login extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={localStyles.formContainer}>
          <View style={localStyles.con}>
            <Icon name="user" size={23} style={localStyles.icon} />
            <FormTextInput
              placeholder={strings.EMAIL_PLACEHOLDER}
              name="fullName"
            />
          </View>
          <View style={localStyles.con}>
            <Icon name="user" size={23} style={localStyles.icon} />
            <FormTextInput
              placeholder={strings.EMAIL_PLACEHOLDER}
              name="username"
            />
          </View>
          <View style={localStyles.con}>
            <Icon name="lock" size={23} style={localStyles.icon} />
            <FormTextInput
              placeholder={strings.PASSWORD_PLACEHOLDER}
              name="email"
            />
          </View>
          <View style={localStyles.con}>
            <Icon name="lock" size={23} style={localStyles.icon} />
            <FormTextInput
              placeholder={strings.PASSWORD_PLACEHOLDER}
              name="password"
            />
          </View>
          <View style={localStyles.con}>
            <Icon name="user" size={23} style={localStyles.icon} />
            <FormTextInput
              placeholder={strings.EMAIL_PLACEHOLDER}
              name="confirmPassword"
            />
          </View>
          <Button label={strings.LOGIN} buttonType="login" />
          <Text style={localStyles.or}>Or</Text>
          <Button label={strings.REGISTER} />
        </View>
      </View>
    );
  }
}
