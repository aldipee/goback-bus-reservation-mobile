import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Card} from 'react-native-elements';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import colors from '../config/colors';
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
      notFound: false,
      isLoading: true,
    };
  }

  scheduleDetails = data => {
    this.props.navigation.navigate('ScheduleDetails', {data});
  };
  componentDidMount() {
    this.props.navigation.setOptions({title: this.props.route.params.label});
    this.props.loadSchedules(this.props.route.params.query, status => {
      if (!status) {
        this.setState({notFound: true});
      }
    });
    setTimeout(() => {
      // const data = await this.fetchDataFromProps();
      const data = this.props.data.schedulesData;
      this.setState({data, isLoading: false});
    }, 200);
  }

  onLoadMore = () => {
    const query = this.props.route.params.query.concat(
      `&page=${this.props.data.pageInfo + 1}`,
    );
    this.props.loadSchedules(query);
    console.log('Jalan BRO');
  };

  render() {
    const placeholderItems = Array.from(Array(3).keys());
    const placeholder = placeholderItems.map((data, index) => (
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
        }}>
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '100%', height: 100, borderRadius: 50}} />
            <View style={{marginLeft: 20}}>
              <View
                style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
              />
              <View
                style={{width: 280, height: 20, borderRadius: 4, marginTop: 10}}
              />
              <View
                style={{marginTop: 10, width: 280, height: 20, borderRadius: 4}}
              />
              <View
                style={{marginTop: 10, width: 280, height: 20, borderRadius: 4}}
              />
            </View>
          </View>
        </SkeletonPlaceholder>
      </Card>
    ));
    // const items =
    //   this.state.data &&
    //   this.state.data.map((data, index) => {
    //     return (

    //     );
    //   });
    return (
      <>
        {!this.state.notFound ? (
          <FlatList
            onEndReached={this.onLoadMore}
            onEndReachedThreshold={0.2}
            data={this.state.data}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => this.scheduleDetails(item)}>
                <Card containerStyle={{borderRadius: 3}}>
                  <View style={localStyle.fix}>
                    <Text style={localStyle.busTitle}>{item.agent}</Text>
                    <Text style={localStyle.price}>
                      {convertToRupiah(item.price)}
                    </Text>
                  </View>
                  <View style={localStyle.schedule}>
                    <View style={localStyle.fixTransport}>
                      <Text style={localStyle.time}>{tConvert(item.time)}</Text>
                      <Text style={localStyle.busName}>{item.bus_name}</Text>
                    </View>
                    <View style={localStyle.fixTransport}>
                      <Text style={localStyle.durations}>6h 0m</Text>
                    </View>
                    <View style={localStyle.fixTransport}>
                      <Text style={localStyle.time}>4:30 PM</Text>
                      <Text style={localStyle.busName}>{item.bus_name}</Text>
                    </View>
                  </View>
                  <View style={localStyle.container}>
                    <Text style={localStyle.seats}>
                      {item.seatsAvaiable.length} seats left!
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: colors.MAIN_GREY,
                textTransform: 'uppercase',
                marginTop: '40%',
                marginLeft: '20%',
              }}>
              No Schedules Found
            </Text>
          </View>
        )}
      </>
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
