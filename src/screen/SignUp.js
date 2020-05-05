import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import strings from '../config/strings';
import styles from '../style/index';
import colors from '../config/colors';
import {setNewUser, checkUsername} from '../redux/actions/AuthActions';
import {connect} from 'react-redux';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
    emailError: null,
  };
  componentDidMount() {}
  toRegister = () => {
    this.props.navigation.navigate('SignUp');
  };
  checkemail = () => {
    let req = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(req.test(this.state.email));
    if (!req.test(this.state.email)) {
      this.setState({emailError: 'Email is invalid!'});
    } else {
      this.setState({emailError: null});
    }
  };
  checkUser = () => {
    console.log(this.state.username);
    this.props.checkUsername(this.state.username, success => {
      console.log('IS ', success);
      if (!success) {
        this.setState({error: 'Username already exist!'});
      } else {
        this.setState({error: null});
      }
    });
  };
  SignUp = () => {
    const data = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    this.props.setNewUser(data, success => {
      if (success) {
        this.props.navigation.navigate('SuccessRegis', {
          username: this.state.username,
        });
      } else {
        Alert.alert('Registration failed, please try again later');
      }
    });
  };
  render() {
    return (
      <>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              paddingHorizontal: 20,
              marginTop: 50,
            }}>
            <Text
              style={{fontSize: 26, paddingHorizontal: 10, fontWeight: 'bold'}}>
              Let's Join Us!
            </Text>
            <Text
              style={{
                fontSize: 19,
                paddingHorizontal: 10,
                color: '#d1d1d1',
              }}>
              We always try to provide the best for you
            </Text>
          </View>
          <View style={styles.parent}>
            <View style={localStyles.formContainer}>
              <View style={localStyles.con}>
                <Input
                  autoFocus={true}
                  onBlur={() => this.checkUser()}
                  placeholder="Pick Username"
                  label="Username"
                  icon="user"
                  onChangeText={text => this.setState({username: text.trim()})}
                  errorMessage={this.state.error ? this.state.error : false}
                />
                <Input
                  placeholder={strings.EMAIL_PLACEHOLDER}
                  label="Email"
                  icon="mail"
                  onChangeText={text => this.setState({email: text.trim()})}
                  onBlur={() => this.checkemail()}
                  errorMessage={
                    !this.state.emailError ? false : 'Email not valid'
                  }
                />
                <Input
                  placeholder={strings.PASSWORD_PLACEHOLDER}
                  secureTextEntry={true}
                  label="Password "
                  icon="lock"
                  rightIcon="eye"
                  rightIconContainerStyle={{marginRight: 12}}
                  onChangeText={text => this.setState({password: text.trim()})}
                />
                <Input
                  placeholder={strings.CONFIRM_PASSWORD}
                  secureTextEntry={true}
                  label="Confirm password "
                  icon="lock"
                  rightIcon="eye"
                  rightIconContainerStyle={{marginRight: 12}}
                  onChangeText={text =>
                    this.setState({confirmPassword: text.trim()})
                  }
                />
              </View>
              <Button
                label={strings.SIGN_UP}
                buttonType="login"
                onPress={this.SignUp}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text style={localStyles.or}>
                  Already have a account? Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const localStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: '90%',
    marginTop: '3%',
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
const mapDispatchToProps = {setNewUser, checkUsername};
export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
