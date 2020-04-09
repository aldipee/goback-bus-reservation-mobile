import React, {Component} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {Header, Avatar} from 'react-native-elements';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();

const localStyle = StyleSheet.create({
  header: {
    backgroundColor: colors.MAIN_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
  },
  info: {
    backgroundColor: 'red',
  },
});

export default class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={{borderBottomWidth: 0, marginTop: -30}}
          centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        />
        <View style={localStyle.header}>
          <Avatar
            size="xlarge"
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            showEditButton
            rounded
          />
        </View>
        <View style={localStyle.info} />
      </View>
    );
  }
}
