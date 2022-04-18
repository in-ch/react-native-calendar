import React from 'react';
import { Calendar } from 'react-native-calendars';
import { Text, View } from 'react-native';
import Header from './Header';

const CCalendar = () => {
  return (
    <>
      <Calendar
        dayComponent={({ date, state }) => {
          return (
            <View style={{ height: 100 }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: state === 'disabled' ? 'black' : 'black',
                  borderBottomColor: 'blue',
                  height: 350,
                }}
              >
                {date?.day}
              </Text>
            </View>
          );
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
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
        renderArrow={(direction) =>
          direction === 'left' ? (
            <Text style={{ backgroundColor: 'red' }}>aasdfasdfasdfasdf</Text>
          ) : (
            <Text>asdfasdfasdf</Text>
          )
        }
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={(date) => {
          return (
            <>
              <Header date={date} />
            </>
          );
        }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
    </>
  );
};

export default CCalendar;
