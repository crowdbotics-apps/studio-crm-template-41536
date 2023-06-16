import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const EventDetails = () => {
  const navigation = useNavigation();
  const event = {
    title: 'Music Concert',
    price: '$50',
    date: '2022-12-25',
    time: '19:00',
    location: 'New York City',
    description: 'Join us for an amazing music concert featuring top artists.',
    imageUrl: 'https://tinyurl.com/42evm3m3'
  };
  return <View style={styles.container}>
      <Image source={{
      uri: event.imageUrl
    }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.price}>{event.price}</Text>
      <Text style={styles.dateTime}>{event.date} at {event.time}</Text>
      <Text style={styles.location}>{event.location}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.favoriteButton}>
          <Text style={styles.buttonText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI17");
        }}><Text style={styles.buttonText}>Book Event</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10
  },
  dateTime: {
    fontSize: 16,
    marginBottom: 10
  },
  location: {
    fontSize: 16,
    marginBottom: 10
  },
  description: {
    fontSize: 14,
    marginBottom: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  favoriteButton: {
    backgroundColor: '#FFC107',
    padding: 10,
    borderRadius: 5,
    width: '45%'
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '45%'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
export default EventDetails;