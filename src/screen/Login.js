import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../components/Button';
import FormTextInput from '../components/TextInput';
import strings from '../config/strings';
import styles from '../style/index';
import colors from '../config/colors';
import AsyncStorage from '@react-native-community/async-storage';
import {setLogin} from '../redux/actions/AuthActions';
import {connect} from 'react-redux';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };
  componentDidMount() {
    AsyncStorage.getItem('token', (err, result) => {
      if (result) {
        console.log('HEREEEEE', result);
      }
    });
  }
  toRegister = () => {
    this.props.navigation.navigate('SignUp');
  };
  toHome = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.setLogin(data);

    // this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <>
        <Text>Welcome back!</Text>
        <View style={styles.parent}>
          <View style={localStyles.formContainer}>
            <View style={localStyles.con}>
              <Icon
                name="user"
                color={colors.SECOND_BLUE}
                size={23}
                style={localStyles.icon}
              />
              <FormTextInput
                onChangeText={text => this.setState({username: text})}
                placeholder={strings.EMAIL_PLACEHOLDER}
              />
            </View>
            <View style={localStyles.con}>
              <Icon
                name="lock"
                color={colors.SECOND_BLUE}
                size={23}
                style={localStyles.icon}
              />
              <FormTextInput
                onChangeText={text => this.setState({password: text})}
                placeholder={strings.PASSWORD_PLACEHOLDER}
              />
            </View>
            <View>
              <Text style={localStyles.forgot}>Forgot password?</Text>
            </View>
            <Button
              label={strings.LOGIN}
              buttonType="login"
              onPress={this.toHome}
            />
            <Text style={localStyles.or}>Don't have an account yet?</Text>
            <Button label={strings.REGISTER} onPress={this.toRegister} />
          </View>
        </View>
      </>
    );
  }
}

const localStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: '90%',
    marginTop: '50%',
  },
  forgot: {
    marginLeft: 210,
    marginTop: -17,
    marginBottom: 20,
    color: colors.DODGER_BLUE,
  },
  form: {
    marginTop: 50,
  },
  or: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 9,
    color: colors.MAIN_GREY,
    fontWeight: '200',
  },
  icon: {
    position: 'absolute',
    top: 13,
    left: 7,
  },
  con: {
    position: 'relative',
    marginTop: 7,
  },
});
const mapDispatchToProps = {setLogin};
export default connect(
  null,
  mapDispatchToProps,
)(Login);
