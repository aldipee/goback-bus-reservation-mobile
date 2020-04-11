import React, {Component} from 'react';
import {Calendar} from 'react-native-calendars';
import {connect} from 'react-redux';
import {setDate} from '../redux/actions/SchedulesActions';

class Date extends Component {
  state = {
    selectedDate: '',
  };
  render() {
    return (
      <Calendar
        // Initially visible month. Default = Date()
        current={'2020-04-09'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2020-04-09'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2020-09-09'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.log('day Presss day', day);

          this.props.navigation.navigate('home', {dateSelected: day});
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMM yyyy '}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false

        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
      />
    );
  }
}

const mapStateToProps = state => ({
  data: state.schedulesData,
});

const mapDispatchToProps = {setDate};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Date);
