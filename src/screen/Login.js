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
    marginTop: '50%',
  },
  form: {
    marginTop: 50,
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
  toRegister = () => {
    this.props.navigation.navigate('SignUp');
  };
  toHome = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.parent}>
        <View style={localStyles.formContainer}>
          <View style={localStyles.con}>
            <Icon name="user" size={23} style={localStyles.icon} />
            <FormTextInput placeholder={strings.EMAIL_PLACEHOLDER} />
          </View>
          <View style={localStyles.con}>
            <Icon name="lock" size={23} style={localStyles.icon} />
            <FormTextInput placeholder={strings.PASSWORD_PLACEHOLDER} />
          </View>
          <Button
            label={strings.LOGIN}
            buttonType="login"
            onPress={this.toHome}
          />
          <Text style={localStyles.or}>Or</Text>
          <Button label={strings.REGISTER} onPress={this.toRegister} />
        </View>
      </View>
    );
  }
}
