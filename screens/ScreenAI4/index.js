import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header} onPress={() => {
      navigation.navigate("ScreenAI29");
    }}>
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI16");
      }}><Image style={styles.icon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI26");
      }}><Image style={styles.icon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI13");
        }}><Text style={styles.buttonText}>Kanban</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI14");
        }}><Text style={styles.buttonText}>Booking</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI18");
        }}><Text style={styles.buttonText}>Calendar</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI27");
        }}><Text style={styles.buttonText}>Chat</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI19");
        }}><Text style={styles.buttonText}>Transactions</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  icon: {
    width: 30,
    height: 30
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: '#4B0082',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  }
});
export default App;