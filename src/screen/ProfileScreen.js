import React, {useState, useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {Card, Avatar, Button, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {setLogout} from '../redux/actions/AuthActions';
import {loadUserData} from '../redux/actions/UserActions';
import FeatherIcon from 'react-native-vector-icons/Feather';

import myColors from '../config/colors';
import {convertToRupiah} from '../utils/convert';

function ProfileScreen(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  useFocusEffect(
    useCallback(() => {
      // props.getProfileDetail();
      async function getData() {
        const data = fetchData();
        return data;
      }
      getData().then(data => {
        console.log(data);
        setProfileData(data);
        setIsLoading(false);
      });
    }, []),
  );
  useEffect(() => {
    props.loadUserData();
  }, []);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      if (props.data.token !== '') {
        resolve(props.data);
      }
    });
  };

  const onLogout = status => {
    props.setLogout(data => {
      if (data) {
        props.navigation.navigate('Home');
      } else {
      }
    });
  };

  return (
    <ScrollView>
      {profileData && profileData.singleData && (
        <>
          <View
            style={{
              backgroundColor: myColors.SECOND_BLUE,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              height: 190,
              paddingHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar
              rounded
              size="large"
              source={{
                uri:
                  'http://localhost:5001/public/users/1584947420598-ETdKZfYU4AEh_Of.jpg',
              }}
              onPress={() =>
                props.navigation.navigate('UploadImage', {
                  data: profileData.singleData,
                })
              }
              activeOpacity={0.7}
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff',
                marginTop: 10,
              }}>
              {profileData.singleData.fullName}
            </Text>
          </View>
          <View style={{paddingHorizontal: 10, backgroundColor: '#fff'}}>
            {/* Balance Info */}
            <View>
              <Card
                containerStyle={{
                  marginTop: -30,
                  borderRadius: 4,
                  borderWidth: 0,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderRightWidth: 1,
                      paddingRight: 17,
                      borderColor: '#0f0f0f',
                    }}>
                    <Icon name="wallet" size={35} color={myColors.MAIN_BLUE} />
                    <View style={{marginLeft: 10}}>
                      <Text style={{fontSize: 9, textTransform: 'uppercase'}}>
                        Saldo Dompet
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: myColors.BLACK,
                          fontWeight: 'bold',
                        }}>
                        {profileData.singleData.balance &&
                          convertToRupiah(profileData.singleData.balance)}
                      </Text>
                    </View>
                  </View>
                  <Button
                    title="Top up"
                    type="outline"
                    titleStyle={{fontSize: 13, paddingHorizontal: 10}}
                  />
                </View>
              </Card>
            </View>
            {/* Purhcase History */}
            <View style={{marginTop: 25}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
                Riwayat Transaksi
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                <View style={localStyle.iconBox}>
                  <FeatherIcon
                    name="credit-card"
                    color={myColors.MAIN_GREY}
                    size={30}
                  />
                  <Text style={localStyle.iconDesc}> Menunggu Pembayaran</Text>
                </View>
                <View style={localStyle.iconBox}>
                  <FeatherIcon
                    name="box"
                    color={myColors.MAIN_GREY}
                    size={30}
                  />
                  <Text style={localStyle.iconDesc}> Diproses</Text>
                </View>
                <View style={localStyle.iconBox}>
                  <FeatherIcon
                    name="truck"
                    color={myColors.MAIN_GREY}
                    size={30}
                  />
                  <Text style={localStyle.iconDesc}> Dikirim</Text>
                </View>
                <View style={localStyle.iconBox}>
                  <FeatherIcon
                    name="box"
                    color={myColors.MAIN_GREY}
                    size={30}
                  />
                  <Text style={localStyle.iconDesc}> Selesai</Text>
                </View>
              </View>
            </View>
            {/* Data Diri Here */}
            <View style={{marginVertical: 30}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Data Diri</Text>
              <View>
                <ListItem
                  containerStyle={{paddingLeft: 1}}
                  title={'Email'}
                  subtitle={'aldipeee@gmail.com'}
                  rightTitle={'Terverifikasi'}
                  rightTitleStyle={{fontSize: 11}}
                  titleStyle={{fontSize: 12, color: myColors.MAIN_GREY}}
                  bottomDivider
                />
                <ListItem
                  containerStyle={{paddingLeft: 1}}
                  title={'Nomor Handphone'}
                  subtitle={profileData.singleData.phoneNumber}
                  rightTitle={'Terverifikasi'}
                  rightTitleStyle={{fontSize: 11}}
                  titleStyle={{fontSize: 12, color: myColors.MAIN_GREY}}
                  bottomDivider
                />
                <ListItem
                  containerStyle={{paddingLeft: 1}}
                  title={'Alamat'}
                  subtitle={profileData.singleData.fullAddress}
                  rightTitleStyle={{fontSize: 11}}
                  titleStyle={{fontSize: 12, color: myColors.MAIN_GREY}}
                  bottomDivider
                />
              </View>
            </View>
            {/* End of Data diri */}
            <View style={{marginBottom: 20}}>
              <Button
                onPress={onLogout}
                title="Logout"
                buttonStyle={{backgroundColor: myColors.ORANGE}}
              />
            </View>
          </View>
        </>
      )}

      {/* Avatar and Picture */}
    </ScrollView>
  );
}

const localStyle = StyleSheet.create({
  iconBox: {
    width: 73,
    alignItems: 'center',
    padding: 5,
  },
  iconDesc: {fontSize: 11, alignItems: 'center'},
});

const mapStateToProps = state => {
  return {
    data: state.userData,
  };
};

export default connect(
  mapStateToProps,
  {loadUserData, setLogout},
)(ProfileScreen);
