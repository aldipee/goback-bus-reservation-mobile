import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {loadUserData} from '../redux/actions/UserActions';
import {converDate, convertToRupiah, tConvert} from '../utils/convert';
import colors from '../config/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    color: colors.ORANGE,
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
  chair: {
    backgroundColor: colors.MAIN_GREY,
    padding: 10,
    margin: 10,
  },
  chairSelected: {
    backgroundColor: colors.ORANGE,
    padding: 10,
    margin: 10,
  },
  chairNotReady: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
  },
});

class SelectSeat extends Component {
  state = {
    seats: Array.from(
      {length: this.props.route.params.data.total_seat},
      (v, k) => k + 1,
    ),
    seatSelected: 0,
  };
  componentDidMount() {
    this.props.loadUserData();
  }
  selectThisSeat = seatNumber => {
    const seatIndex = seatNumber - 1;
    this.setState({
      seatSelected: seatNumber,
    });
  };
  goToConfirmPurchase = () => {
    this.props.navigation.navigate('confirmPurchase', {
      data: {
        ...this.props.route.params.data,
        selectedSeat: this.state.seatSelected,
        userData: this.props.userData.singleData,
      },
    });
  };
  render() {
    const item = this.state.seats.map((data, index) => {
      if (index === this.state.seatSelected - 1) {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => this.selectThisSeat(index + 1)}
            style={localStyle.chairSelected}
            disabled={this.state.hasSelected ? true : false}>
            <Text>{data}</Text>
            <Icon name="user" size={30} />
          </TouchableOpacity>
        );
      } else if (
        this.props.route.params.data.seatsBooked &&
        this.props.route.params.data.seatsBooked.includes(data)
      ) {
        return (
          <TouchableOpacity
            key={index}
            style={localStyle.chairNotReady}
            disabled={true}>
            <Text>{data}</Text>
            <Icon name="user" size={30} />
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => this.selectThisSeat(index + 1)}
            style={localStyle.chair}>
            <Icon name="user" size={30} />
            <Text>{data}</Text>
          </TouchableOpacity>
        );
      }
    });
    const {data} = this.props.route.params;
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
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
              <Text style={{marginLeft: 10}}>
                Selected seat {this.state.seatSelected}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}>
                {item}
              </View>
              <Button
                title="Book now"
                style={{marginVertical: 10}}
                onPress={this.goToConfirmPurchase}
              />
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData,
  };
};

export default connect(
  mapStateToProps,
  {loadUserData},
)(SelectSeat);
