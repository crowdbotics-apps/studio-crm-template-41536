import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Clipboard, StyleSheet } from 'react-native';

const AppShareScreen = () => {
  const [email, setEmail] = useState('');
  const appShareLink = 'https://tinyurl.com/42evm3m3';

  const copyLink = () => {
    Clipboard.setString(appShareLink);
  };

  const sendEmail = () => {// Send email logic
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Share App</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" />
      <View style={styles.linkContainer}>
        <Text style={styles.link}>{appShareLink}</Text>
        <TouchableOpacity onPress={copyLink} style={styles.copyButton}>
          <Text style={styles.buttonText}>Copy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={sendEmail} style={styles.sendButton}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setEmail('')} style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  link: {
    fontSize: 16,
    marginRight: 10
  },
  copyButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  sendButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  cancelButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default AppShareScreen;