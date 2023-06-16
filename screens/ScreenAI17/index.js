import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, ScrollView, Button, DatePickerIOS } from 'react-native';

const EventDetailsScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const event = {
    title: 'Sample Event',
    place: 'Sample Place',
    startTime: '10:00 AM',
    endTime: '5:00 PM',
    imageUrl: 'https://tinyurl.com/42evm3m3'
  };
  return <ScrollView style={styles.container}>
      <Image source={{
      uri: event.imageUrl
    }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.place}>{event.place}</Text>
      <Text style={styles.time}>
        {event.startTime} - {event.endTime}
      </Text>
      <DatePickerIOS date={selectedDate} onDateChange={setSelectedDate} mode="date" style={styles.datePicker} />
      <TouchableOpacity style={styles.button}>
        <Button title="Book Event" onPress={() => {}} color="#FFFFFF" />
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  place: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  },
  time: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10
  },
  datePicker: {
    marginTop: 20
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50
  }
});
export default EventDetailsScreen;