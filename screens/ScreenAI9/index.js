import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Button, DatePickerAndroid } from 'react-native';

const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(new Date());

  const openDatePicker = async () => {
    try {
      const {
        action,
        year,
        month,
        day
      } = await DatePickerAndroid.open({
        date
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        setDate(new Date(year, month, day));
      }
    } catch ({
      code,
      message
    }) {
      console.warn('Cannot open date picker', message);
    }
  };

  return <ScrollView style={styles.container}>
      <Image style={styles.userImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="Address" />
      <TextInput style={styles.textArea} value={bio} onChangeText={setBio} placeholder="Bio" multiline />
      <View style={styles.radioButtons}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setGender('male')}>
          <Text style={styles.radioButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton} onPress={() => setGender('female')}>
          <Text style={styles.radioButtonText}>Female</Text>
        </TouchableOpacity>
      </View>
      <Button title="Select Birthday" onPress={openDatePicker} />
      <Text style={styles.dateText}>{date.toDateString()}</Text>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    minHeight: 100
  },
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  radioButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10
  },
  radioButtonText: {
    color: '#fff'
  },
  dateText: {
    textAlign: 'center',
    marginBottom: 20
  },
  nextButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center'
  },
  nextButtonText: {
    color: '#fff'
  }
});
export default UserProfileScreen;