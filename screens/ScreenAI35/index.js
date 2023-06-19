import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const NotificationSettings = () => {
  const [inApp, setInApp] = useState(false);
  const [push, setPush] = useState(false);
  const [email, setEmail] = useState(false);
  const [frequency, setFrequency] = useState('daily');
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>In-app Notifications</Text>
        <TouchableOpacity style={inApp ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setInApp(!inApp)} />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Push Notifications</Text>
        <TouchableOpacity style={push ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setPush(!push)} />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Email Notifications</Text>
        <TouchableOpacity style={email ? styles.toggleButtonActive : styles.toggleButton} onPress={() => setEmail(!email)} />
      </View>
      <Text style={styles.frequencyText}>Notification Frequency</Text>
      <View style={styles.frequencyContainer}>
        <TouchableOpacity style={frequency === 'daily' ? styles.frequencyButtonActive : styles.frequencyButton} onPress={() => setFrequency('daily')}>
          <Text style={styles.frequencyButtonText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={frequency === 'weekly' ? styles.frequencyButtonActive : styles.frequencyButton} onPress={() => setFrequency('weekly')}>
          <Text style={styles.frequencyButtonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={frequency === 'monthly' ? styles.frequencyButtonActive : styles.frequencyButton} onPress={() => setFrequency('monthly')}>
          <Text style={styles.frequencyButtonText}>Monthly</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  backButton: {
    marginTop: 20,
    marginBottom: 30
  },
  backButtonText: {
    fontSize: 18,
    color: '#007AFF'
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  toggleText: {
    fontSize: 16
  },
  toggleButton: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0'
  },
  toggleButtonActive: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007AFF'
  },
  frequencyText: {
    fontSize: 16,
    marginBottom: 10
  },
  frequencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  frequencyButton: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  frequencyButtonActive: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  frequencyButtonText: {
    fontSize: 16,
    color: '#FFFFFF'
  }
});
export default NotificationSettings;