import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../components/Button';
import FormTextInput from '../components/TextInput';
import strings from '../config/strings';
import styles from '../style/index';
import colors from '../config/colors';
import {setNewUser} from '../redux/actions/AuthActions';
import {connect} from 'react-redux';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  componentDidMount() {}
  toRegister = () => {
    this.props.navigation.navigate('SignUp');
  };
  SignUp = () => {
    const data = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    const s = this.props.setNewUser(data);
    console.log('dddddd', s);
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
                onChangeText={text => this.setState({username: text.trim()})}
                placeholder={strings.USERNAME_PLACEHOLDER}
              />
            </View>
            <View style={localStyles.con}>
              <Icon
                name="user"
                color={colors.SECOND_BLUE}
                size={23}
                style={localStyles.icon}
              />
              <FormTextInput
                onChangeText={text => this.setState({email: text.trim()})}
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
                onChangeText={text => this.setState({password: text.trim()})}
                placeholder={strings.PASSWORD_PLACEHOLDER}
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
                onChangeText={text =>
                  this.setState({confirmPassword: text.trim()})
                }
                placeholder={strings.CONFIRM_PASSWORD}
              />
            </View>

            <Button
              label={strings.SIGN_UP}
              buttonType="login"
              onPress={this.SignUp}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Text style={localStyles.or}>Already have a account? Login</Text>
            </TouchableOpacity>
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
    marginTop: '20%',
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
    marginTop: 8,
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
const mapDispatchToProps = {setNewUser};
export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
