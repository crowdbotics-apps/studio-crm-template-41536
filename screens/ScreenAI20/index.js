import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TransactionDetails = () => {
  const transaction = {
    sender: 'John Doe',
    receiver: 'Jane Smith',
    amount: 100,
    transactionId: '1234567890',
    type: 'Transfer',
    date: '2022-01-01',
    time: '12:00 PM'
  };
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Sender: {transaction.sender}</Text>
        <Text style={styles.label}>Receiver: {transaction.receiver}</Text>
        <Text style={styles.label}>Amount: ${transaction.amount}</Text>
        <Text style={styles.label}>Transaction ID: {transaction.transactionId}</Text>
        <Text style={styles.label}>Type: {transaction.type}</Text>
        <Text style={styles.label}>Date: {transaction.date}</Text>
        <Text style={styles.label}>Time: {transaction.time}</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center'
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#4A90E2',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%'
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  }
});
export default TransactionDetails;