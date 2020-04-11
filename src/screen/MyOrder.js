import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconBus from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSort from 'react-native-vector-icons/FontAwesome5';
import IconBarcode from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors';
import {Header} from 'react-native-elements';
export default class MyOrder extends Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={localStyle.headerContainer}
          rightComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'MY BOOKING', style: {color: '#fff'}}}
        />
        <View style={localStyle.headersecond}>
          <View style={localStyle.box1}>
            <Text style={localStyle.input}> CODE BOOKING : IH45ZQ </Text>
            <IconBarcode name="barcode" size={70} color="black" />
          </View>
        </View>
        <View style={localStyle.headerbox2}>
          <View style={localStyle.box2}>
            <Text style={localStyle.inputbox2}> Jadwal Berangkat</Text>
          </View>
        </View>
        <View style={localStyle.headerbox3}>
          <View style={localStyle.box1}>
            <Text style={localStyle.input}> KODE BOOKING </Text>
          </View>
        </View>
      </View>
    );
  }
}

const localStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.MAIN_BLUE,
    justifyContent: 'space-around',
    marginTop: -20,
    height: 80,
  },
  headersecond: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 100,
    marginTop: 10,
  },
  headerbox2: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    height: 40,
    marginTop: 30,
  },
  headerbox3: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 150,
    marginTop: 5,
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 9,
    right: 30,
  },
  input: {
    top: 8,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 5,
  },
  inputbox2: {
    top: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 90,
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 200,
  },
});
// const localStyle = StyleSheet.create({
//   //   container: {
//   //     flex: 1,
//   //     flexDirection: 'column',
//   //     justifyContent: 'center',
//   //     alignItems: 1,
//   //     backgrounColor: 'red',
//   //   },
//   box1: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgrounColor: 'red',
//   },
//   box2: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgrounColor: 'blue',
//   },
// });
