import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../components/Button';
import FormTextInput from '../components/TextInput';
import strings from '../config/strings';
import styles from '../style/index';
import colors from '../config/colors';
import {setLogin} from '../redux/actions/AuthActions';
import {connect} from 'react-redux';

class SuccessRegis extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <>
        <View style={styles.parent}>
          <View style={localStyles.formContainer}>
            <View style={localStyles.notif}>
              <Icon name="check-circle" size={70} color={colors.MAIN_GREY} />
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: colors.BLACK,
                  marginVertical: 15,
                }}>
                Congratulations {this.props.route.params.username}!
              </Text>
              <Text style={{marginBottom: 10}}>
                Your registration is completed. Please check your email to
                verify yourself.
              </Text>
            </View>
            <Button
              label={strings.LOGIN}
              buttonType="login"
              onPress={() => this.props.navigation.navigate('LoginScreen')}
            />
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
  notif: {
    justifyContent: 'center',
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
)(SuccessRegis);
