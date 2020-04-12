import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {setProfileUser} from '../redux/actions/AuthActions';
import {validationHelper} from '../utils/validasi';
import colors from '../config/colors';

const localStyle = StyleSheet.create({
  header: {
    backgroundColor: colors.MAIN_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
  },
  info: {
    backgroundColor: 'red',
  },
});

class SecondForm extends Component {
  constructor(props) {
    super(props);
  }
  logout = () => {
    this.props.setLogout();
    this.props.navigation.navigate('Home');
  };
  state = {
    photo: null,
    noData: true,
    formData: {},
  };
  componentDidMount() {
    this.setState({formData: this.props.route.params.data});
  }
  onSave = () => {
    const data = {...this.state.formData, photo: this.state.photo};
    console.log(this.state.photo, 'FSSS');
    // let dataForm = new FormData();
    // const file = {
    //   name: this.state.photo.fileName,
    //   type: this.state.photo.type,
    //   uri: this.state.photo.uri,
    // };
    // // dataForm.append('avatart', file);
    // dataForm.append('fullName', this.state.formData.fullName);
    this.props.setProfileUser(data);
  };
  handleUpload = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };
  render() {
    return (
      <View>
        <View style={localStyle.header}>
          <Avatar
            size="xlarge"
            title="MT"
            onPress={this.handleUpload}
            showEditButton
            rounded
            source={
              this.state.photo && {
                uri: this.state.photo.uri,
              }
            }
          />
        </View>
        <View style={localStyle.info} />
        <TouchableOpacity onPress={this.logout}>
          <Button
            icon={<Icon name="md-log-in" size={25} color="white" />}
            title="Save"
            titleStyle={{marginLeft: 10}}
            containerStyle={{marginLeft: 130}}
            onPress={this.onSave}
          />
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(
  null,
  {setProfileUser},
)(SecondForm);
