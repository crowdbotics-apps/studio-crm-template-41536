import { Pressable } from "react-native";
import React from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet } from 'react-native';
const conversations = [{
  id: '1',
  name: 'John Doe',
  username: '@johndoe',
  lastMessageTimestamp: '2m'
}, {
  id: '2',
  name: 'Jane Smith',
  username: '@janesmith',
  lastMessageTimestamp: '5m'
}, {
  id: '3',
  name: 'Michael Brown',
  username: '@michaelbrown',
  lastMessageTimestamp: '10m'
}];

const MessageScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profilePicture} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.name}>Your Name</Text>
        <Text style={styles.username}>@yourusername</Text>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search for conversations..." />
      <FlatList data={conversations} renderItem={({
      item
    }) => <View style={styles.conversation}>
            <Pressable><Text style={styles.conversationName}>{item.name}</Text></Pressable>
            <Text style={styles.conversationUsername}>{item.username}</Text>
            <Text style={styles.conversationTimestamp}>
              {item.lastMessageTimestamp}
            </Text>
          </View>} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
  username: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    margin: 10
  },
  conversation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  conversationName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  conversationUsername: {
    fontSize: 14,
    color: 'gray'
  },
  conversationTimestamp: {
    fontSize: 12,
    color: 'gray'
  }
});
export default MessageScreen;