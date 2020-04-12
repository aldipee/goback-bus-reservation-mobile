import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Input, Card, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {setLogout} from '../redux/actions/AuthActions';
import colors from '../config/colors';

class CompleteProfile extends Component {
  state = {
    fullName: '',
    bod: '',
    gender: '',
    phoneNumber: '',
    fullAddress: '',
  };
  logout = () => {
    this.props.setLogout();
    this.props.navigation.navigate('Home');
  };
  next = () => {
    this.props.navigation.navigate('SecondForm', {data: this.state});
  };
  render() {
    return (
      <ScrollView>
        <Text>Hallo, please complete your profile first</Text>
        <Card>
          <Input
            onChangeText={text => this.setState({fullName: text.trim()})}
            inputStyle={{fontSize: 15, paddingBottom: 5}}
            leftIconContainerStyle={{
              marginLeft: 0,
              marginRight: 10,
              paddingBottom: 0,
            }}
            labelStyle={{fontSize: 14}}
            containerStyle={{paddingBottom: 10}}
            label="Full Name"
            placeholder="Your full name..."
            leftIcon={
              <Icon name="md-person" size={24} color={colors.SECOND_BLUE} />
            }
          />

          <Input
            onChangeText={text => this.setState({bod: text.trim()})}
            inputStyle={{fontSize: 15, paddingBottom: 5}}
            leftIconContainerStyle={{
              marginLeft: 0,
              marginRight: 10,
              paddingBottom: 0,
            }}
            labelStyle={{fontSize: 14}}
            containerStyle={{paddingBottom: 10}}
            label="Birth of Date"
            placeholder="Your full name..."
            leftIcon={
              <Icon name="ios-calendar" size={24} color={colors.SECOND_BLUE} />
            }
          />

          <Input
            onChangeText={text => this.setState({gender: text.trim()})}
            inputStyle={{fontSize: 15, paddingBottom: 5}}
            leftIconContainerStyle={{
              marginLeft: 0,
              marginRight: 10,
              paddingBottom: 0,
            }}
            labelStyle={{fontSize: 14}}
            containerStyle={{paddingBottom: 10}}
            label="Sex"
            placeholder="Your full name..."
            leftIcon={
              <Icon name="md-male" size={24} color={colors.SECOND_BLUE} />
            }
          />

          <Input
            onChangeText={text => this.setState({phoneNumber: text.trim()})}
            inputStyle={{fontSize: 15, paddingBottom: 5}}
            leftIconContainerStyle={{
              marginLeft: 0,
              marginRight: 10,
              paddingBottom: 0,
            }}
            labelStyle={{fontSize: 14}}
            containerStyle={{paddingBottom: 10}}
            label="Phone Number"
            placeholder="Your full name..."
            leftIcon={
              <Icon name="md-call" size={24} color={colors.SECOND_BLUE} />
            }
          />

          <Input
            onChangeText={text => this.setState({fullAddress: text.trim()})}
            inputStyle={{fontSize: 15, paddingBottom: 5}}
            leftIconContainerStyle={{
              marginLeft: 0,
              marginRight: 10,
              paddingBottom: 0,
            }}
            labelStyle={{fontSize: 14}}
            containerStyle={{paddingBottom: 10}}
            label="Full Address"
            placeholder="Your full name..."
            leftIcon={
              <Icon name="md-map" size={24} color={colors.SECOND_BLUE} />
            }
          />
          <View style={localStyle.fitToTex}>
            <Button
              icon={<Icon name="md-log-out" size={25} color="white" />}
              title="Logout"
              titleStyle={{marginLeft: 10}}
              onPress={this.logout}
            />
            <Button
              icon={<Icon name="md-log-in" size={25} color="white" />}
              title="Next"
              titleStyle={{marginLeft: 10}}
              containerStyle={{marginLeft: 130}}
              onPress={this.next}
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const localStyle = StyleSheet.create({
  header: {
    backgroundColor: colors.MAIN_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
  },
  fitToTex: {
    flexDirection: 'row',
  },
  info: {
    backgroundColor: 'red',
  },
});
export default connect(
  null,
  {setLogout},
)(CompleteProfile);
