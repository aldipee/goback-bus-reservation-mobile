import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Header, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';
import {setLogout} from '../redux/actions/AuthActions';

import colors from '../config/colors';

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

class ProfileScreen extends Component {
  logout = () => {
    this.props.setLogout();
    this.props.navigation.navigate('Home');
  };
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
        <TouchableOpacity onPress={this.logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  null,
  {setLogout},
)(ProfileScreen);
