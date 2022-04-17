import React from 'react';
import { SafeAreaView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const App = () => {
  return (
    <SafeAreaView>
      <Calendar
        current={'2022-04-17'}
        minDate={'2022-01-01'}
        maxDate={'2022-12-31'}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        hideArrows={true}
        renderArrow={(direction) => <Arrow />}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={7}
        hideDayNames={false}
        showWeekNumbers={false}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={(date) => {
          /*Return JSX*/
        }}
      />
    </SafeAreaView>
  );
};

export default App;
