import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TransactionPendingScreen = () => {
  const navigation = useNavigation();

  const handleOkPress = () => {
    console.log('OK pressed');
  };

  return <View style={styles.container}>
      <Text style={styles.message}>Transaction pending</Text>
      <TouchableOpacity style={styles.button} onPress={handleOkPress}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI25");
      }}><Text style={styles.buttonText}>OK</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
});
export default TransactionPendingScreen;