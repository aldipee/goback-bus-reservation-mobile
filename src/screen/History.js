import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Card, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {loadUserHistory} from '../redux/actions/UserActions';
import {converDate, convertToRupiah} from '../utils/convert';
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
  },
  date: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
});

class History extends Component {
  componentDidMount() {
    this.props.loadUserHistory();
  }

  showDetails = data => {
    this.props.navigation.navigate('HistoryDetails', {data});
  };
  render() {
    return (
      <SafeAreaView>
        <Header
          placement="left"
          containerStyle={{marginTop: -25}}
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{
            text: 'Reservations History',
            style: {color: '#fff', fontWeight: 'bold', fontSize: 16},
          }}
        />
        <ScrollView>
          <View>
            {this.props.history &&
              this.props.history.map((data, index) => (
                <TouchableOpacity onPress={() => this.showDetails(data)}>
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
                    <Text style={localStyle.date}>
                      {converDate(data.schedule_date)}
                    </Text>
                    <View style={localStyle.fixJustify}>
                      <Text style={localStyle.title}>
                        Booking ID #{data.reservation_id}
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
                      <Text style={localStyle.status}>
                        {' '}
                        Purchase Successful!
                      </Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              ))}
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
)(History);
