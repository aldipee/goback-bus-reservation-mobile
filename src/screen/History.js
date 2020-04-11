import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import {Card, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
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
});

export default class History extends Component {
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
              <View style={localStyle.fixJustify}>
                <Text style={localStyle.title}>Booking ID #000291</Text>
                <Text style={localStyle.price}>Rp 222.825</Text>
              </View>
              <View style={localStyle.fix}>
                <Icon
                  name="md-bus"
                  size={28}
                  color={colors.ORANGE}
                  style={localStyle.icon}
                />
                <Text style={localStyle.route}>Yogyakarta - Bandung</Text>
              </View>
              <View>
                <Text style={localStyle.status}> Purchase Successful!</Text>
              </View>
            </Card>
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
              <View style={localStyle.fixJustify}>
                <Text style={localStyle.title}>Booking ID #000291</Text>
                <Text style={localStyle.price}>Rp 222.825</Text>
              </View>
              <View style={localStyle.fix}>
                <Icon
                  name="md-bus"
                  size={28}
                  color={colors.ORANGE}
                  style={localStyle.icon}
                />
                <Text style={localStyle.route}>Yogyakarta - Bandung</Text>
              </View>
              <View>
                <Text style={localStyle.status}> Purchase Successful!</Text>
              </View>
            </Card>
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
              <View style={localStyle.fixJustify}>
                <Text style={localStyle.title}>Booking ID #000291</Text>
                <Text style={localStyle.price}>Rp 222.825</Text>
              </View>
              <View style={localStyle.fix}>
                <Icon
                  name="md-bus"
                  size={28}
                  color={colors.ORANGE}
                  style={localStyle.icon}
                />
                <Text style={localStyle.route}>Yogyakarta - Bandung</Text>
              </View>
              <View>
                <Text style={localStyle.status}> Purchase Successful!</Text>
              </View>
            </Card>
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
              <View style={localStyle.fixJustify}>
                <Text style={localStyle.title}>Booking ID #000291</Text>
                <Text style={localStyle.price}>Rp 222.825</Text>
              </View>
              <View style={localStyle.fix}>
                <Icon
                  name="md-bus"
                  size={28}
                  color={colors.ORANGE}
                  style={localStyle.icon}
                />
                <Text style={localStyle.route}>Yogyakarta - Bandung</Text>
              </View>
              <View>
                <Text style={localStyle.status}> Purchase Successful!</Text>
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
