import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');

  const sendFeedback = () => {
    Alert.alert('Feedback Sent', 'Thank you for your feedback!', [{
      text: 'OK'
    }]);
    setFeedback('');
  };

  return <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Write your feedback here..." multiline value={feedback} onChangeText={setFeedback} />
      <Button title="Send" onPress={sendFeedback} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    minHeight: 150
  }
});
export default FeedbackScreen;