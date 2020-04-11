import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {Card} from 'react-native-elements';
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
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.props.loadSchedules(this.props.route.params.query);
  }
  // fetchDataFromProps = () => {
  //   return new Promise((resolve, reject) => {
  //     if (this.props.data.schedulesData) {
  //       resolve(this.props.data.schedulesData);
  //     } else {
  //       reject('Error Not Data found');
  //     }
  //   });
  // };
  componentDidMount() {
    this.props.navigation.setOptions({title: this.props.route.params.label});
    setTimeout(() => {
      // const data = await this.fetchDataFromProps();
      const data = this.props.data.schedulesData;
      this.setState({data});
    }, 200);
  }

  onLoadMore = page => {
    const query = this.props.route.params.query.concat(`&page=${page}`);
    this.props.loadSchedules(query);
  };

  render() {
    const items =
      this.state.data &&
      this.state.data.map((data, index) => {
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
        <View>{this.state.data ? items : <Text>Holla</Text>}</View>
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
