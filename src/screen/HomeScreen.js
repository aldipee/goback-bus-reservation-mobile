import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Card, Button, Header, Text as Txt} from 'react-native-elements';
import PickerModal from 'react-native-picker-modal-view';
import {convertToRupiah} from '../utils/convert';
import {connect} from 'react-redux';
import {converDate} from '../utils/convert';
import {loadRoutes} from '../redux/actions/SchedulesActions';
import {loadUserData} from '../redux/actions/UserActions';
import Icon from 'react-native-vector-icons/Ionicons';
// import style from '../style/index';
import colors from '../config/colors';

const localStyle = StyleSheet.create({
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  headerContainer: {
    backgroundColor: colors.MAIN_BLUE,
    justifyContent: 'space-around',
    marginTop: -30,
    height: 200,
    borderRadius: 24,
  },
  searchSection: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    width: '30%',
    height: 20,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: 'red',
    color: '#424242',
  },
  label: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.3)',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    marginBottom: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginTop: -140,
  },
});

class HomeForm extends Component {
  constructor(props) {
    super(props);
    this.props.loadRoutes();
    this.props.loadUserData();
    this.state = {
      selectedRoute: {},
      selectedDate: '',
      selectedLabel: '',
      date: {},
      routes: [],
      refreshing: false,
    };
  }

  // componentWillMount() {
  //   this.setState({
  //     routes: this.props.routes,
  //   });
  // }

  componentDidMount() {
    this.setState({
      routes: this.props.routes,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.route.params !== prevProps.route.params) {
      // eslint-disable-next-line
      this.setState({
        selectedDate: this.props.route.params.dateSelected.dateString,
      });
    }
  }
  onRefresh = () => {
    this.props.loadUserData();
    this.setState({
      history: this.props.history,
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        refreshing: false,
        isLoading: false,
      });
    }, 2000);
  };
  Bo = selected => {
    console.log(selected);
    const value = selected.Value.split(/\s*\-\s*/g);
    const data = {
      origin: value[0],
      destination: value[1],
    };
    this.setState({
      selectedRoute: data,
      selectedLabel: selected.Name,
    });
  };

  showCalendar = () => {
    this.props.navigation.navigate('Calendar');
  };
  onSubmit = () => {
    const query = `?origin=${this.state.selectedRoute.origin}&destination=${
      this.state.selectedRoute.destination
    }&date=${this.state.selectedDate}`;
    this.props.navigation.navigate('Schedules', {
      query,
      label: this.state.selectedLabel,
    });
  };
  render() {
    const {singleData} = this.props.userData;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }>
        <Header containerStyle={localStyle.headerContainer} />
        <View style={localStyle.cardContainer}>
          <Card
            containerStyle={{
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 5,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  textTransform: 'uppercase',
                  color: colors.MAIN_GREY,
                }}>
                Your balance
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    color: colors.ORANGE,
                  }}>
                  {singleData.balance && convertToRupiah(singleData.balance)}
                </Text>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate('TopUp', {
                      balance: singleData.balance && singleData.balance,
                    })
                  }
                  icon={<Icon name="md-wallet" size={20} color="#fff" />}
                  title="Top up"
                />
              </View>
            </View>
          </Card>
          <Card
            title={`Pick up your trip ${singleData.fullName}!`}
            containerStyle={{
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 5,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <View>
              <Txt style={localStyle.label}>Origin</Txt>
              {console.log('heee', this.props.routes)}
              {this.props.routes && this.props.routes.length !== 0 && (
                <PickerModal
                  style={localStyle.input}
                  onSelected={selected => this.Bo(selected)}
                  onRequestClosed={() => console.warn('closed...')}
                  onBackRequest={() => console.warn('back key pressed')}
                  items={
                    typeof this.props.routes == 'object'
                      ? (() => {
                          console.log('aaa', this.props.routes);
                          return this.props.routes;
                        })()
                      : []
                  }
                  sortingLanguage={'tr'}
                  showToTopButton={true}
                  defaultSelected={this.state.selectedItem}
                  autoCorrect={false}
                  autoGenerateAlphabet={true}
                  chooseText={'Choose one'}
                  searchText={'Search...'}
                  forceSelect={false}
                  autoSort={true}
                />
              )}
            </View>

            <View>
              <Txt style={localStyle.label}>Date</Txt>
              <TouchableOpacity onPress={this.showCalendar}>
                <Text style={localStyle.date}>
                  {this.props.route.params
                    ? converDate(
                        this.props.route.params.dateSelected.dateString,
                      )
                    : 'Select Date'}
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              disabled={this.state.selectedDate === '' ? true : null}
              icon={{name: 'search', color: '#fff'}}
              backgroundColor={colors.ORANGE}
              buttonStyle={localStyle.button}
              title="Search "
              onPress={this.onSubmit}
            />
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  routes: state.schedulesData.routes,
  userData: state.userData,
});

const mapDispatchToProps = {loadRoutes, loadUserData};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeForm);
