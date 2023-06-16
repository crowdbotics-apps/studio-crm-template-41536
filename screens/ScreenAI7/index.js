import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity, Image } from 'react-native';

const TwoFactorAuthScreen = () => {
  const [token, setToken] = useState('');

  const handleSubmit = () => {// Handle token submission
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Two Factor Authentication</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setToken} value={token} placeholder="Enter your token" keyboardType="numeric" maxLength={6} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    marginBottom: 30
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default TwoFactorAuthScreen;