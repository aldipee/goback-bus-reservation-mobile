import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Card, Button, Header, Text as Txt} from 'react-native-elements';
import PickerModal from 'react-native-picker-modal-view';
import {connect} from 'react-redux';
import {loadRoutes} from '../redux/actions/SchedulesActions';
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
    this.state = {
      selectedRoute: {},
      selectedDate: '',
      selectedLabel: '',
      date: {},
      routes: [],
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
    return (
      <View>
        <Header containerStyle={localStyle.headerContainer} />
        <View style={localStyle.cardContainer}>
          <Card
            title="Pick Your Trip!"
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
                    ? this.props.route.params.dateSelected.dateString
                    : 'Select Date'}
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              icon={{name: 'search', color: '#fff'}}
              backgroundColor={colors.ORANGE}
              buttonStyle={localStyle.button}
              title="Search "
              onPress={this.onSubmit}
            />
          </Card>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  routes: state.schedulesData.routes,
});

const mapDispatchToProps = {loadRoutes};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeForm);
