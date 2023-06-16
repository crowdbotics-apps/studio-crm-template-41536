import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput, Button } from 'react-native';
const eventsData = [{
  id: '1',
  title: 'Event 1',
  description: 'This is event 1 description',
  date: '2022-12-01',
  time: '18:00',
  price: '$50'
}, {
  id: '2',
  title: 'Event 2',
  description: 'This is event 2 description',
  date: '2022-12-02',
  time: '19:00',
  price: '$60'
}];

const EventItem = ({
  event,
  onPress
}) => <TouchableOpacity style={styles.eventItem} onPress={onPress}>
    <Image style={styles.eventImage} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.eventInfo}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.eventDescription}>{event.description}</Text>
      <Text style={styles.eventDateTime}>
        {event.date} - {event.time}
      </Text>
      <Text style={styles.eventPrice}>{event.price}</Text>
    </View>
  </TouchableOpacity>;

const EventsScreen = () => {
  const [search, setSearch] = useState('');

  const handleEventPress = event => {
    console.log('Event pressed:', event);
  };

  const handleConfirm = () => {
    console.log('Confirm pressed');
  };

  const handleBack = () => {
    console.log('Back pressed');
  };

  return <View style={styles.container}>
      <TextInput style={styles.searchBar} onChangeText={setSearch} value={search} placeholder="Search events" />
      <FlatList data={eventsData} renderItem={({
      item
    }) => <EventItem event={item} onPress={() => handleEventPress(item)} />} keyExtractor={item => item.id} />
      <View style={styles.buttonsContainer}>
        <Button title="Confirm" onPress={handleConfirm} />
        <Button title="Back" onPress={handleBack} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10
  },
  eventImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  eventInfo: {
    marginLeft: 10
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  eventDescription: {
    fontSize: 14,
    color: '#777'
  },
  eventDateTime: {
    fontSize: 12,
    color: '#999'
  },
  eventPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  }
});
export default EventsScreen;