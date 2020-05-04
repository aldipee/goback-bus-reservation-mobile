import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, RefreshControl} from 'react-native';
import {Card, Button, Header, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';
import {addTopUp} from '../redux/actions/TopUpAction';
import {convertToRupiah} from '../utils/convert';

class TopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nominal: 0,
    };
  }

  onSubmit = () => {
    this.props.addTopUp(this.state.nominal, success => {});
  };
  render() {
    return (
      <ScrollView>
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
                Your Current balance
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
                  {convertToRupiah(this.props.route.params.balance)}
                </Text>
              </View>
            </View>
          </Card>
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
              <Input
                onChangeText={text => this.setState({nominal: text.trim()})}
                inputStyle={{fontSize: 16, paddingBottom: 5}}
                leftIconContainerStyle={{
                  marginLeft: 0,
                  marginRight: 10,
                  paddingBottom: 0,
                }}
                labelStyle={{fontSize: 14}}
                containerStyle={{paddingBottom: 10, marginTop: 10}}
                label="Nominal"
                placeholder="Ex : Rp 300.000"
                leftIcon={
                  <Icon name="ios-share" size={24} color={colors.SECOND_BLUE} />
                }
              />
            </View>

            <Button
              backgroundColor={colors.ORANGE}
              buttonStyle={localStyle.button}
              title="Top Up "
              onPress={this.onSubmit}
            />
          </Card>
        </View>
      </ScrollView>
    );
  }
}

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
    marginTop: -60,
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

const mapDispatchToProps = {addTopUp};

export default connect(
  null,
  mapDispatchToProps,
)(TopUp);
