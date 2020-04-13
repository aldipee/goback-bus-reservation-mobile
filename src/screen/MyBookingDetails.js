import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import {Card, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import IconBarcode from 'react-native-vector-icons/FontAwesome';
import {loadUserHistory} from '../redux/actions/UserActions';
import {converDate, convertToRupiah, tConvert} from '../utils/convert';
import colors from '../config/colors';
import MyBooking from './MyBooking';

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
});

class MyBookingDetails extends Component {
  render() {
    const {data} = this.props.route.params;
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <View
              style={{
                backgroundColor: colors.WHITE,
                borderRadius: 3,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                padding: 20,
                paddingTop: 30,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 13,
                  textTransform: 'uppercase',
                  color: colors.MAIN_GREY,
                  marginBottom: -6,
                }}>
                Booking Code
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: colors.SECOND_BLUE,
                }}>
                {data.booking_code}
              </Text>
              <IconBarcode name="barcode" size={70} color="black" />
            </View>
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
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 7,
                    fontSize: 15,
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    {data.booked_by_name}
                  </Text>
                  <Text>Seat number : {data.seat_number}</Text>
                </View>
                <Text style={{fontSize: 13, color: colors.MAIN_GREY}}>
                  {data.passenger_id_type} - {data.passenger_id}
                </Text>
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
                  {data.travel_name}
                </Text>
              </View>
              <Text style={localStyle.date}>
                {converDate(data.schedule_date)}
              </Text>
              <View style={localStyle.fixJustify}>
                <Text style={localStyle.title}>
                  {tConvert(data.schedule_time)}
                </Text>
                <Text style={localStyle.price}>
                  {convertToRupiah(data.totalPrice)}
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
              <View>
                <Text style={localStyle.status}> Waiting to check-in</Text>
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
    history: state.userData.history,
  };
};

export default connect(
  mapStateToProps,
  {loadUserHistory},
)(MyBookingDetails);
