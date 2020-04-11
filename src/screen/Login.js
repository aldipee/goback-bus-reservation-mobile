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
    const s = this.props.setLogin(data);
    console.log('dddddd', s);
    // this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.parent}>
        <View style={localStyles.formContainer}>
          <View style={localStyles.con}>
            <Icon name="user" size={23} style={localStyles.icon} />
            <FormTextInput
              onChangeText={text => this.setState({username: text})}
              placeholder={strings.EMAIL_PLACEHOLDER}
            />
          </View>
          <View style={localStyles.con}>
            <Icon name="lock" size={23} style={localStyles.icon} />
            <FormTextInput
              onChangeText={text => this.setState({password: text})}
              placeholder={strings.PASSWORD_PLACEHOLDER}
            />
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
const mapDispatchToProps = {setLogin};
export default connect(
  null,
  mapDispatchToProps,
)(Login);
