import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {setProfileUser} from '../redux/actions/AuthActions';
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
    upload: false,
    formData: {},
    image: `http:${this.props.route.params.data.avatar}`,
  };
  componentDidMount() {
    // this.setState({formData: this.props.route.params.data});
  }

  onSave = () => {
    const data = {...this.state.formData, photo: this.state.photo};
    let dataForm = new FormData();
    const file = {
      name: this.state.photo.fileName,
      type: this.state.photo.type,
      uri: this.state.photo.uri,
    };
    dataForm.append('avatart', file);
    this.props.setProfileUser(dataForm);
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
      if (response.uri) {
        this.setState({photo: response, image: response.uri, upload: true});
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
        <View style={localStyle.info} />
        <Button
          icon={<Icon name="md-log-in" size={25} color="white" />}
          title="Save"
          titleStyle={{marginLeft: 10}}
          containerStyle={{marginLeft: 130}}
          onPress={this.onSave}
        />
      </View>
    );
  }
}
export default connect(
  null,
  {setProfileUser},
)(SecondForm);
