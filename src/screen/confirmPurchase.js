import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
} from 'react-native';
import {Card, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {addNewReservation} from '../redux/actions/ReservationActions';

import {converDate, convertToRupiah, tConvert} from '../utils/convert';
import colors from '../config/colors';

const localStyle = StyleSheet.create({
  title: {
    color: colors.MAIN_GREY,
  },
  fix: {
    flexDirection: 'row',
    paddingBottom: 8,
    paddingTop: 10,
    marginBottom: 5,
    backgroundColor: colors.SECOND_GREY,
  },
  fixJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 14,
  },
  icon: {
    marginLeft: 15,
  },
  route: {
    marginTop: 3,
    marginLeft: 20,
  },
  status: {
    marginLeft: 12,
    fontSize: 12,
    color: colors.GREEN,
    marginTop: 10,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.SECOND_BLUE,
  },
  date: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  balanceInfo: {
    marginBottom: 15,
  },
  balanceValue: {
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: colors.ORANGE,
    width: 140,
    color: colors.WHITE,
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
  },
  balanceDesc: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.MAIN_GREY,
  },
});

class confirmPurchase extends Component {
  state = {
    idType: '',
    idNumber: '',
  };
  sumbitReservation = () => {
    const {data} = this.props.route.params;
    const reservationData = {
      seatNumber: data.selectedSeat,
      userIdNumber: this.state.idNumber,
      userIdType: this.state.idType,
      scheduleId: data.id,
    };
    this.props.addNewReservation(reservationData, url => {
      console.log(url);
      this.props.navigation.navigate(url);
    });
  };

  componentDidMount() {
    const {data} = this.props.route.params;
    // if(data.price > data.userData.balance)
  }
  render() {
    const {data} = this.props.route.params;
    return (
      <SafeAreaView>
        <ScrollView>
          {data.price > data.userData.balance ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: colors.TORCH_RED,
                paddingVertical: 10,
              }}>
              <Text style={{color: colors.WHITE, fontWeight: 'bold'}}>
                Your balance is not enought
              </Text>
            </View>
          ) : (
            <Text />
          )}

          <View>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Passenger Informations
            </Text>
            <Card
              containerStyle={{
                backgroundColor: colors.WHITE,
                borderRadius: 3,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
              }}>
              <View style={localStyle.balanceInfo}>
                <Text style={localStyle.balanceDesc}>Your balance</Text>
                <Text style={localStyle.balanceValue}>
                  {convertToRupiah(data.userData.balance)}
                </Text>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 7,
                    fontSize: 15,
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    {data.userData.fullName}
                  </Text>
                  <Text>Selected seat : {data.selectedSeat}</Text>
                </View>

                <Text style={{fontSize: 13, color: colors.MAIN_GREY}} />
                <Input
                  onChangeText={text => this.setState({idType: text.trim()})}
                  inputStyle={{fontSize: 15, paddingBottom: 5}}
                  leftIconContainerStyle={{
                    marginLeft: 0,
                    marginRight: 10,
                    paddingBottom: 0,
                  }}
                  labelStyle={{fontSize: 14}}
                  containerStyle={{paddingBottom: 10, marginTop: 10}}
                  label="ID Type"
                  placeholder="Your ID Type .."
                  leftIcon={
                    <Icon
                      name="ios-paper"
                      size={24}
                      color={colors.SECOND_BLUE}
                    />
                  }
                />
                <Input
                  onChangeText={text => this.setState({idNumber: text.trim()})}
                  inputStyle={{fontSize: 15, paddingBottom: 5}}
                  leftIconContainerStyle={{
                    marginLeft: 0,
                    marginRight: 10,
                    paddingBottom: 0,
                  }}
                  labelStyle={{fontSize: 14}}
                  containerStyle={{paddingBottom: 10, marginTop: 10}}
                  label="Your ID number"
                  placeholder="Your ID Number ..."
                  leftIcon={
                    <Icon name="md-card" size={24} color={colors.SECOND_BLUE} />
                  }
                />
              </View>
            </Card>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Trip Informations
            </Text>
            <Card
              containerStyle={{
                backgroundColor: colors.WHITE,
                borderRadius: 3,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                paddingLeft: 0,
                paddingRight: 0,
                marginBottom: 10,
              }}
              bottomDivider>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: colors.SECOND_GREY,
                  paddingBottom: 10,
                }}>
                <Text style={{marginLeft: 10, fontSize: 15}}>
                  {data.bus_name}
                </Text>
                <Text style={{marginRight: 10, fontSize: 16}}>
                  {data.agent}
                </Text>
              </View>
              <Text style={localStyle.date}>{converDate(data.date)}</Text>
              <View style={localStyle.fixJustify}>
                <Text style={localStyle.title}>{tConvert(data.time)}</Text>
                <Text style={localStyle.price}>
                  {convertToRupiah(data.price)}
                </Text>
              </View>
              <View style={localStyle.fix}>
                <Icon
                  name="md-bus"
                  size={28}
                  color={colors.ORANGE}
                  style={localStyle.icon}
                />
                <Text style={localStyle.route}>
                  {data.origin} - {data.destination}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 15,
                }}>
                <Button
                  title="Purchase"
                  onPress={this.sumbitReservation}
                  disabled={data.price > data.userData.balance}
                />
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  return {
    reservationData: state.reservationData,
  };
};

export default connect(
  mapStateToProps,
  {addNewReservation},
)(confirmPurchase);
