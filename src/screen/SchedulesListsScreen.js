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
    fontSize: 13,
  },
});

class HomeSchedules extends Component {
  // onPress = () => {
  //   this.props.navigator.navigate('profilePage');
  // };

  componentDidMount() {
    this.props.loadSchedules();
  }

  render() {
    return (
      <ScrollView>
        <View>
          <TouchableOpacity>
            <Card containerStyle={{borderRadius: 3}}>
              <View style={localStyle.fix}>
                <Text style={localStyle.busTitle}>Putra Kencana</Text>
                <Text style={localStyle.price}>Rp 105.000</Text>
              </View>
              <View style={localStyle.schedule}>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>04:30</Text>
                  <Text style={localStyle.busName}>Aragon Transport</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.durations}>6h 0m</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>04:30</Text>
                  <Text style={localStyle.busName}>Aragon Transport</Text>
                </View>
              </View>
              <View style={localStyle.container}>
                <Text style={localStyle.seats}> 30 seats left!</Text>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity>
            <Card containerStyle={{borderRadius: 3}}>
              <View style={localStyle.fix}>
                <Text style={localStyle.busTitle}>Putra Kencana</Text>
                <Text style={localStyle.price}>Rp 105.000</Text>
              </View>
              <View style={localStyle.schedule}>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>04:30</Text>
                  <Text style={localStyle.busName}>Aragon Transport</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.durations}>6h 0m</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>04:30</Text>
                  <Text style={localStyle.busName}>Aragon Transport</Text>
                </View>
              </View>
              <View style={localStyle.container}>
                <Text style={localStyle.seats}> 30 seats left!</Text>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity>
            <Card containerStyle={{borderRadius: 3}}>
              <View style={localStyle.fix}>
                <Text style={localStyle.busTitle}>Putra Kencana</Text>
                <Text style={localStyle.price}>Rp 105.000</Text>
              </View>
              <View style={localStyle.schedule}>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>04:30</Text>
                  <Text style={localStyle.busName}>Aragon Transport</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.durations}>6h 0m</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>04:30</Text>
                  <Text style={localStyle.busName}>Aragon Transport</Text>
                </View>
              </View>
              <View style={localStyle.container}>
                <Text style={localStyle.seats}> 30 seats left!</Text>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity>
            <Card containerStyle={{borderRadius: 3}}>
              <View style={localStyle.fix}>
                <Text style={localStyle.busTitle}>Putra Kencana</Text>
                <Text style={localStyle.price}>Rp 105.000</Text>
              </View>
              <View style={localStyle.schedule}>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>04:30</Text>
                  <Text style={localStyle.busName}>Aragon Transport</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.durations}>6h 0m</Text>
                </View>
                <View style={localStyle.fixTransport}>
                  <Text style={localStyle.time}>04:30</Text>
                  <Text style={localStyle.busName}>Aragon Transport</Text>
                </View>
              </View>
              <View style={localStyle.container}>
                <Text style={localStyle.seats}> 30 seats left!</Text>
              </View>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.schedulesData,
    auth: state.authData,
  };
};
const mapDispathToProps = {loadSchedules};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(HomeSchedules);
// export default HomeSchedules;
