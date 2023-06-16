import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, Picker } from 'react-native';
const transactions = [{
  id: '1',
  sender: 'John Doe',
  receiver: 'Jane Smith',
  amount: 100,
  date: '2022-01-01',
  type: 'Transfer'
}, {
  id: '2',
  sender: 'Jane Smith',
  receiver: 'John Doe',
  amount: 50,
  date: '2022-01-02',
  type: 'Payment'
}];

const TransactionScreen = ({
  navigation
}) => {
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  return <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.totalAmount}>Total Amount: ${totalAmount}</Text>
      <TextInput style={styles.searchBar} onChangeText={setSearch} value={search} placeholder="Search transactions" />
      <View style={styles.filters}>
        <TextInput style={styles.dateInput} onChangeText={setStartDate} value={startDate} placeholder="Start Date" />
        <TextInput style={styles.dateInput} onChangeText={setEndDate} value={endDate} placeholder="End Date" />
        <Picker selectedValue={transactionType} style={styles.picker} onValueChange={itemValue => setTransactionType(itemValue)}>
          <Picker.Item label="All" value="" />
          <Picker.Item label="Transfer" value="Transfer" />
          <Picker.Item label="Payment" value="Payment" />
        </Picker>
      </View>
      <FlatList data={transactions} renderItem={({
      item
    }) => <View style={styles.transactionItem}>
            <Image style={styles.transactionImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionText}>
                {item.sender} → {item.receiver}
              </Text>
              <Text style={styles.transactionText}>Amount: ${item.amount}</Text>
              <Text style={styles.transactionText}>Date: {item.date}</Text>
              <Text style={styles.transactionText}>Type: {item.type}</Text>
            </View>
          </View>} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  backButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  dateInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '25%'
  },
  picker: {
    height: 50,
    width: '25%'
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10
  },
  transactionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  transactionDetails: {
    flex: 1
  },
  transactionText: {
    fontSize: 16
  }
});
export default TransactionScreen;