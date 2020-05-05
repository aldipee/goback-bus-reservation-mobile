import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Input, Card, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {setLogout} from '../redux/actions/AuthActions';
import DatePicker from 'react-native-datepicker';
import colors from '../config/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';

class CompleteProfile extends Component {
  state = {
    fullName: '',
    bod: '',
    gender: 0,
    phoneNumber: '',
    fullAddress: '',
    date: new Date(),
    showDate: false,
  };
  logout = () => {
    this.props.setLogout();
    this.props.navigation.navigate('Home');
  };
  next = () => {
    this.props.navigation.navigate('SecondForm', {data: this.state});
  };
  onChange = (event, selectedDate) => {
    const date = new Date(event.nativeEvent.timestamp)
      .toISOString()
      .substring(0, 10);
    const currentDate = selectedDate || this.state.date;
    this.setState({bod: date, showDate: false, date: selectedDate});
  };
  render() {
    return (
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text
              style={{fontSize: 26, paddingHorizontal: 10, fontWeight: 'bold'}}>
              Profile Data
            </Text>
            <Text
              style={{
                fontSize: 19,
                paddingHorizontal: 10,
                color: '#d1d1d1',
              }}>
              Please complete your information
            </Text>
          </View>
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
            <TouchableOpacity onPress={() => this.setState({showDate: true})}>
              <Input
                onChangeText={text => this.setState({fullName: text.trim()})}
                inputStyle={{fontSize: 15, paddingBottom: 5}}
                disabled={true}
                onTouchStart={() => this.setState({showDates: true})}
                leftIconContainerStyle={{
                  marginLeft: 0,
                  marginRight: 10,
                  paddingBottom: 0,
                }}
                value={this.state.bod}
                labelStyle={{fontSize: 14}}
                containerStyle={{paddingBottom: 10}}
                label="Date of Birth"
                leftIcon={
                  <Icon name="md-person" size={24} color={colors.SECOND_BLUE} />
                }
              />
            </TouchableOpacity>

            {this.state.showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={this.state.date}
                mode={'date'}
                is24Hour={true}
                display="default"
                locale="id-ID"
                onChange={this.onChange}
              />
            )}

            <Picker
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({gender: itemValue})
              }>
              <Picker.Item label="Laki-Laki" value="0" />
              <Picker.Item label="Perempuan" value="1" />
            </Picker>

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
              keyboardType="number-pad"
              label="Phone Number"
              placeholder="Your phone Number"
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
              placeholder="Your Full Address"
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
        </View>
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
