import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
const messages = [{
  id: '1',
  text: 'Hello!',
  sender: 'user'
}, {
  id: '2',
  text: 'Hi there!',
  sender: 'friend'
}, {
  id: '3',
  text: 'How are you?',
  sender: 'user'
}, {
  id: '4',
  text: 'I am good, thanks!',
  sender: 'friend'
}];

const DirectMessagingScreen = () => {
  const [message, setMessage] = useState('');

  const renderItem = ({
    item
  }) => <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.friendMessage]}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.avatar} />
      <Text style={styles.messageText}>{item.text}</Text>
    </View>;

  return <View style={styles.container}>
      <FlatList data={messages} renderItem={renderItem} keyExtractor={item => item.id} style={styles.messageList} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type your message..." value={message} onChangeText={setMessage} />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  messageList: {
    flexGrow: 1
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16
  },
  userMessage: {
    alignSelf: 'flex-end'
  },
  friendMessage: {
    alignSelf: 'flex-start'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8
  },
  messageText: {
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0'
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8
  },
  sendButton: {
    backgroundColor: '#6200EE',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  }
});
export default DirectMessagingScreen;