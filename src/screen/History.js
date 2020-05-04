import React, {Component, useCallback, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Card, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {loadUserHistory} from '../redux/actions/UserActions';
import {converDate, convertToRupiah} from '../utils/convert';
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
    backgroundColor: colors.GREEN,
    color: colors.WHITE,
    width: 95,
    marginTop: 10,
    padding: 3,
    fontWeight: 'bold',
    borderRadius: 4,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
});

const History = props => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    props.loadUserHistory();
    setTimeout(() => {
      setHistory(props.history);
      setIsLoading(false);
    }, 1000);
  }, []);

  const onRefresh = () => {
    props.loadUserHistory();
    setHistory(props.history);
    setIsLoading(true);

    setTimeout(() => {
      setHistory(process.history);
      setIsLoading(false);
      setRefreshing(false);
    }, 1000);
  };

  const showDetails = data => {
    props.navigation.navigate('HistoryDetails', {data});
  };

  const placeholderItems = Array.from(Array(3).keys());
  const placeholder = placeholderItems.map((data, index) => (
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
      }}>
      <SkeletonPlaceholder>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '100%', height: 100, borderRadius: 50}} />
          <View style={{marginLeft: 20}}>
            <View
              style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
            />
            <View
              style={{width: 280, height: 20, borderRadius: 4, marginTop: 10}}
            />
            <View
              style={{marginTop: 10, width: 280, height: 20, borderRadius: 4}}
            />
            <View
              style={{marginTop: 10, width: 280, height: 20, borderRadius: 4}}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </Card>
  ));
  return (
    <SafeAreaView>
      <Header
        placement="left"
        containerStyle={{marginTop: -25}}
        leftComponent={<Icon name="md-paper" color="#fff" size={29} />}
        centerComponent={{
          text: 'Reservations History',
          style: {color: '#fff', fontWeight: 'bold', fontSize: 16},
        }}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {isLoading ? (
          placeholder
        ) : (
          <View>
            {history &&
              history.map((data, index) => (
                <TouchableOpacity onPress={() => showDetails(data)}>
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
                    <Text style={localStyle.date}>
                      {converDate(data.schedule_date)}
                    </Text>
                    <View style={localStyle.fixJustify}>
                      <Text style={localStyle.title}>
                        Booking ID #{data.reservation_id}
                      </Text>
                      <Text style={localStyle.price}>
                        {convertToRupiah(data.totalPrice)}
                      </Text>
                    </View>
                    <View style={localStyle.fix}>
                      <Icon
                        name="md-bus"
                        size={28}
                        color={colors.ORANGE}
                        style={localStyle.icon}
                      />
                      <Text style={localStyle.route}>
                        {data.origin} - {data.destination}
                      </Text>
                    </View>
                    <View>
                      <Text style={localStyle.status}> Trip Completed</Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    history: state.userData.history,
  };
};

export default connect(
  mapStateToProps,
  {loadUserHistory},
)(History);
