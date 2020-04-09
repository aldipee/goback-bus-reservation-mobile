import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Button, Header, Text as Txt} from 'react-native-elements';
import {Picker} from '@react-native-community/picker';
import PickerModal from 'react-native-picker-modal-view';
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
});

class Profile extends Component {
  state = {
    selectedRoute: {},
    selectedDestination: {},
    selectedDate: {},
  };

  Bo = selected => {
    this.setState({
      selectedItem: selected,
    });
  };

  onSubmit = () => {
    this.props.navigation.navigate('Schedules');
  };
  render() {
    const list = [
      {
        Name: 'Åland Islands',
        Value: 'Åland Islands',
        Code: 'AX',
        Id: 1,
      },
      {
        Name: 'Albania',
        Value: 'Albania',
        Code: 'AL',
        Id: 2,
      },
      {
        Name: 'Algeria',
        Value: 'Algeria',
        Code: 'DZ',
        Id: 3,
      },
      {
        Name: 'American Samoa',
        Value: 'American Samoa',
        Code: 'AS',
        Id: 4,
      },
      {
        Name: 'AndorrA',
        Value: 'AndorrA',
        Code: 'AD',
        Id: 5,
      },
    ];
    return (
      <View>
        <Header containerStyle={localStyle.headerContainer} />
        <View>
          <Card title="HELLO WORLD">
            <View>
              <Txt style={localStyle.label}>Origin</Txt>
              <PickerModal
                style={localStyle.input}
                onSelected={selected => this.Bo(selected)}
                onRequestClosed={() => console.warn('closed...')}
                onBackRequest={() => console.warn('back key pressed')}
                items={list}
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
            </View>
            <View>
              <Txt style={localStyle.label}>Destination</Txt>
              <PickerModal
                onSelected={selected => this.Bo(selected)}
                onRequestClosed={() => console.warn('closed...')}
                onBackRequest={() => console.warn('back key pressed')}
                items={list}
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
            </View>
            <View />
            <View>
              <Picker />
            </View>
            <Button
              icon={{name: 'search', color: '#fff'}}
              backgroundColor={colors.MAIN_BLUE}
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
export default Profile;
