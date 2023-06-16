import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.logo} />
      <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
          <View style={isChecked ? styles.checked : styles.unchecked} />
        </TouchableOpacity>
        <Text style={styles.label}>
          I agree to the{' '}
          <Text style={styles.link} onPress={() => {}}>
            Terms and Conditions
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={() => {}}>
            Privacy Policy
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: 'blue'
  },
  unchecked: {
    width: 0,
    height: 0
  },
  label: {
    fontSize: 14
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
});
export default SignUpScreen;