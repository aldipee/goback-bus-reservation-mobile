import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {Header, Avatar, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {setLogout} from '../redux/actions/AuthActions';
import {loadUserData} from '../redux/actions/UserActions';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';

const localStyle = StyleSheet.create({
  header: {
    backgroundColor: colors.MAIN_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
  },
  info: {
    backgroundColor: '#fff',
    padding: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  userFullName: {
    fontSize: 20,
    color: colors.WHITE,
    fontWeight: 'bold',
    marginTop: 13,
  },
  price: {
    fontSize: 24,
    color: colors.MAIN_GREY,
    fontWeight: 'bold',
  },
  balance: {
    marginRight: 40,
  },
  balanceLabel: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: -4,
    color: colors.SECOND_GREY,
  },
  userInfo: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  },
  btnLogout: {
    backgroundColor: colors.SECOND_BLUE,
    padding: 20,
    width: '70%',
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
});

class ProfileScreen extends Component {
  logout = () => {
    this.props.setLogout();
    this.props.navigation.navigate('Home');
  };
  componentDidMount() {
    this.props.loadUserData();
  }
  render() {
    return (
      <ScrollView>
        <Header
          placement="left"
          containerStyle={{marginTop: -20}}
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <View style={localStyle.header}>
          <Avatar
            size="xlarge"
            source={{
              uri:
                this.props.data.singleData && this.props.data.singleData.avatar,
            }}
            showEditButton
            rounded
          />
          <View>
            <Text style={localStyle.userFullName}>Fina Leonita</Text>
          </View>
        </View>
        <View style={localStyle.userInfo}>
          <View style={localStyle.balance}>
            <Text style={localStyle.balanceLabel}>Your balance</Text>
            <Text style={localStyle.price}>Rp 360.000</Text>
          </View>
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            title="Top up"
            containerStyle={{marginLeft: 40}}
          />
        </View>
        <View>
          <Text style={localStyle.title}> Personal Informations</Text>
          <View style={localStyle.info}>
            <Text style={localStyle.data}>14 June 2000</Text>
            <Text>Jl. Suka suka</Text>
          </View>
          <View style={localStyle.info}>
            <Text style={localStyle.data}>Female</Text>
            <Text>082185142048</Text>
          </View>
        </View>

        <TouchableOpacity onPress={this.logout} style={localStyle.btnLogout}>
          <Text style={{fontSize: 20, color: colors.WHITE, fontWeight: 'bold'}}>
            Log out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.userData,
  };
};

export default connect(
  mapStateToProps,
  {setLogout, loadUserData},
)(ProfileScreen);
