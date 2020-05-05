import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {setProfileUser} from '../redux/actions/AuthActions';
import {ToastAndroid} from 'react-native';
import colors from '../config/colors';

const localStyle = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
  },
});

class SecondSignUp extends Component {
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
    upload: false,
    formData: {},
    image: `https://metropolishypnotherapy.com/images/user_avatar_35720.png`,
  };
  componentDidMount() {}

  onSave = () => {
    const data = {...this.props.route.params.data};
    let dataForm = new FormData();
    if (this.state.upload) {
      const file = {
        name: this.state.photo.fileName,
        type: this.state.photo.type,
        uri: this.state.photo.uri,
      };
      dataForm.append('avatart', file);
    }
    dataForm.append('fullName', data.fullName);
    dataForm.append('bod', data.bod);
    dataForm.append('gender', data.gender);
    dataForm.append('phoneNumber', data.phoneNumber);
    dataForm.append('address', data.fullAddress);
    this.props.setProfileUser(dataForm, status => {
      if (status) {
        ToastAndroid.show('Your data is Completed!', ToastAndroid.SHORT);
        this.props.navigation.navigate('Home');
      } else {
        ToastAndroid.show('Error, Please try again later', ToastAndroid.SHORT);
      }
    });
  };
  handleUpload = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log(response.fileSize);
      console.log(response.fileSize > 1048576, 'INI FILE SIZE');
      if (response.uri) {
        if (response.fileSize > 1048576) {
          ToastAndroid.show('Maximum Filesize 1 mb', ToastAndroid.SHORT);
        } else {
          this.setState({photo: response, image: response.uri, upload: true});
        }
      }
    });
  };
  render() {
    const {data} = this.props.route.params;
    return (
      <View>
        <View style={localStyle.header}>
          <Avatar
            size="xlarge"
            onPress={this.handleUpload}
            showEditButton
            rounded
            source={{
              uri: this.state.image,
            }}
          />
        </View>

        <View style={{paddingHorizontal: 120}}>
          <Button
            icon={<Icon name="md-log-in" size={25} color="white" />}
            title="Upload"
            titleStyle={{marginLeft: 10}}
            onPress={this.onSave}
            disabled={this.state.upload ? null : true}
          />
          <TouchableOpacity onPress={this.onSave}>
            <Text
              style={{alignSelf: 'center', marginTop: 10, fontWeight: 'bold'}}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(
  null,
  {setProfileUser},
)(SecondSignUp);
