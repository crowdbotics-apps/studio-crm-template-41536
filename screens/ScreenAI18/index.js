import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
const events = [{
  id: 1,
  title: 'Meeting',
  date: '2023-02-01',
  time: '10:00'
}, {
  id: 2,
  title: 'Lunch',
  date: '2023-02-01',
  time: '12:30'
}, {
  id: 3,
  title: 'Workout',
  date: '2023-02-02',
  time: '18:00'
}];

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('2023-02-01');

  const renderEvent = ({
    item
  }) => <TouchableOpacity style={styles.event}>
      <Text style={styles.eventTime}>{item.time}</Text>
      <Text style={styles.eventTitle}>{item.title}</Text>
    </TouchableOpacity>;

  return <View style={styles.container}>
      <Image style={styles.calendarImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.eventsContainer}>
        <FlatList data={events.filter(event => event.date === selectedDate)} renderItem={renderEvent} keyExtractor={item => item.id.toString()} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  calendarImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain'
  },
  eventsContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  event: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16
  },
  eventTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginRight: 16
  },
  eventTitle: {
    fontSize: 16,
    color: '#333333'
  }
});
export default CalendarScreen;