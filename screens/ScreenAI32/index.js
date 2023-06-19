import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

const FeedbackScreen = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSend = () => {// Handle sending feedback
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.titleInput} placeholder="Title" value={title} onChangeText={setTitle} />
        <TextInput style={styles.textInput} placeholder="Your feedback" value={text} onChangeText={setText} multiline />
        <Button title="Send" onPress={handleSend} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20
  },
  titleInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    minHeight: 100,
    marginBottom: 20,
    textAlignVertical: 'top',
    padding: 10
  }
});
export default FeedbackScreen;