import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/Home';
import Login from '../src/screen/Login';
import Schedules from '../src/screen/SchedulesListsScreen';
import SignUp from '../src/screen/SignUp';
import Calendar from '../src/screen/Date';
import {connect} from 'react-redux';
import colors from './config/colors';

const Stack = createStackNavigator();

class Index extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.auth && !this.props.auth.isLogin ? (
            <Stack.Screen
              name="LoginScreen"
              options={{title: 'Login', headerShown: false}}
              component={Login}
              auth={this.props.auth}
            />
          ) : (
            <>
              <Stack.Screen
                name="Home"
                options={{
                  title: 'Home',
                  headerShown: false,
                }}
                component={Home}
                auth={this.props.auth}
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
                name="Calendar"
                options={{title: 'Home', headerShown: false}}
                component={Calendar}
                auth={this.props.auth}
              />

              <Stack.Screen
                name="SignUp"
                options={{title: 'SignUp', headerShown: false}}
                auth={this.props.auth}
                component={SignUp}
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
