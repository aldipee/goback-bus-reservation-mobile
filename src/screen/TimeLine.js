/*React Native TimeLine ListView / Flatlist*/
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

export default class BasicTimeLine extends Component {
  constructor() {
    super();
    this.data = [
      {
        time: '09:00',
        title: 'Event 1',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        time: '10:45',
        title: 'Event 2',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <Timeline style={{flex: 1}} data={this.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'red',
  },
});
