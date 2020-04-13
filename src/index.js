import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/Home';
import Login from '../src/screen/Login';
import Schedules from '../src/screen/SchedulesListsScreen';
import SignUp from '../src/screen/SignUp';
import CompleteProfile from '../src/screen/CompleteProfile';
import SecondForm from './screen/SecondForm';
import Calendar from '../src/screen/Date';
import HistoryDetails from '../src/screen/HistoryDetails';
import ScheduleDetails from '../src/screen/ScheduleDetails';
import SelectSeat from '../src/screen/SelectSeat';
import confirmPurchase from '../src/screen/confirmPurchase';
import {connect} from 'react-redux';
import colors from './config/colors';
import MyBookingDetails from './screen/MyBookingDetails';
import SuccessRegis from './screen/SuccesRegis';

const Stack = createStackNavigator();

class Index extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.auth && !this.props.auth.isLogin ? (
            <>
              <Stack.Screen
                name="LoginScreen"
                options={{title: 'Login', headerShown: false}}
                component={Login}
              />
              <Stack.Screen
                name="SignUp"
                options={{title: 'SignUp', headerShown: false}}
                component={SignUp}
              />
              <Stack.Screen
                name="SuccessRegis"
                options={{
                  title: 'Booking Details',
                  headerShown: false,
                }}
                component={SuccessRegis}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Home"
                options={{
                  title: 'Home',
                  headerShown: false,
                }}
                component={
                  this.props.auth.isProfileComplete ? Home : CompleteProfile
                }
                auth={this.props.auth}
              />
              <Stack.Screen
                name="SecondForm"
                options={{
                  title: 'Upload your picture',
                  headerTitleStyle: {
                    fontSize: 19,
                    color: colors.WHITE,
                    fontWeight: 'bold',
                  },
                  headerStyle: {
                    backgroundColor: colors.SECOND_BLUE,
                  },
                }}
                auth={this.props.auth}
                component={SecondForm}
              />
              <Stack.Screen
                name="SelectSeat"
                options={{
                  title: 'Home',
                }}
                component={SelectSeat}
              />
              <Stack.Screen
                name="confirmPurchase"
                options={{
                  title: 'Home',
                }}
                component={confirmPurchase}
              />
              <Stack.Screen
                name="Schedules"
                options={{
                  title: 'Schedules',
                  headerTitleStyle: {
                    fontSize: 16,
                    color: colors.WHITE,
                    fontWeight: 'bold',
                  },
                  headerStyle: {
                    backgroundColor: colors.SECOND_BLUE,
                  },
                }}
                auth={this.props.auth}
                component={Schedules}
              />
              <Stack.Screen
                name="ScheduleDetails"
                options={{
                  title: 'Schedule Details',
                  headerTitleStyle: {
                    fontSize: 16,
                    color: colors.WHITE,
                    fontWeight: 'bold',
                  },
                  headerStyle: {
                    backgroundColor: colors.SECOND_BLUE,
                  },
                }}
                component={ScheduleDetails}
              />
              <Stack.Screen
                name="MyBookingDetails"
                options={{
                  title: 'Booking Details',
                  headerTitleStyle: {
                    fontSize: 16,
                    color: colors.WHITE,
                    fontWeight: 'bold',
                  },
                  headerStyle: {
                    backgroundColor: colors.SECOND_BLUE,
                  },
                }}
                auth={this.props.auth}
                component={MyBookingDetails}
              />

              <Stack.Screen
                name="HistoryDetails"
                options={{
                  title: 'History Details',
                  headerTitleStyle: {
                    fontSize: 16,
                    color: colors.WHITE,
                    fontWeight: 'bold',
                  },
                  headerStyle: {
                    backgroundColor: colors.SECOND_BLUE,
                  },
                }}
                auth={this.props.auth}
                component={HistoryDetails}
              />
              <Stack.Screen
                name="Calendar"
                options={{title: 'Home', headerShown: false}}
                component={Calendar}
                auth={this.props.auth}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authData,
  };
};
export default connect(
  mapStateToProps,
  null,
)(Index);
