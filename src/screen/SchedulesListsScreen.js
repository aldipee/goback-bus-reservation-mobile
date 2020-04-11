import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Card, Button} from 'react-native-elements';
import {loadSchedules} from '../redux/actions/SchedulesActions';
import {tConvert, convertToRupiah} from '../utils/convert';

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 8,
    marginTop: 30,
  },
  fix: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    marginBottom: -4,
  },
  fixTransport: {
    flexDirection: 'row',

    paddingBottom: 8,
    marginBottom: 5,
  },
  busName: {
    marginLeft: 15,
    fontSize: 13,
  },
  time: {
    marginLeft: 28,
  },
  busTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    color: '#ff961f',
    fontWeight: 'bold',
  },
  schedule: {
    marginTop: 10,
    marginBottom: -30,
    borderLeftWidth: 1,
  },
  durations: {
    marginLeft: 31,
    fontSize: 11,
    color: 'rgba(0,0,0,0.3)',
    marginBottom: -7,
    marginTop: -7,
  },
  seats: {
    marginLeft: 196,
    color: 'rgba(0,0,0,0.3)',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

class HomeSchedules extends Component {
  // onPress = () => {
  //   this.props.navigator.navigate('profilePage');
  // };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadSchedules(this.props.route.params.query);
    this.props.navigation.setOptions({title: this.props.route.params.label});
  }

  render() {
    const items =
      this.props.data.schedulesData &&
      this.props.data.schedulesData.map((data, index) => {
        return (
          <TouchableOpacity>
            <Card containerStyle={{borderRadius: 3}}>
              <View style={localStyle.fix}>
                <Text style={localStyle.busTitle}>{data.agent}</Text>
                <Text style={localStyle.price}>
                  {convertToRupiah(data.price)}
                </Text>
              </View>
              <View style={localStyle.schedule}>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>{tConvert(data.time)}</Text>
                  <Text style={localStyle.busName}>{data.bus_name}</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.durations}>6h 0m</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>4:30 PM</Text>
                  <Text style={localStyle.busName}>{data.bus_name}</Text>
                </View>
              </View>
              <View style={localStyle.container}>
                <Text style={localStyle.seats}>
                  {data.seatsAvaiable.length} seats left!
                </Text>
              </View>
            </Card>
          </TouchableOpacity>
        );
      });
    return (
      <ScrollView>
        <View>{!this.props.data.isLoading ? items : <Text>Holla</Text>}</View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.schedulesData,
  };
};
const mapDispathToProps = {loadSchedules};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(HomeSchedules);
// export default HomeSchedules;
