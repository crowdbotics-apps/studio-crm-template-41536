import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TransactionFeesScreen = () => {
  const navigation = useNavigation();
  const transactionFees = [{
    id: 1,
    type: 'Standard',
    fee: '0.0001 BTC'
  }, {
    id: 2,
    type: 'Priority',
    fee: '0.0002 BTC'
  }];
  return <View style={styles.container}>
      <Text style={styles.title}>Transaction Fees</Text>
      {transactionFees.map(fee => <View key={fee.id} style={styles.feeContainer}>
          <Text style={styles.feeType}>{fee.type}</Text>
          <Text style={styles.feeAmount}>{fee.fee}</Text>
        </View>)}
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TouchableOpacity style={styles.confirmButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI24");
      }}><Text style={styles.confirmButtonText}>Confirm</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  feeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: '80%',
    marginBottom: 10
  },
  feeType: {
    fontSize: 18,
    fontWeight: '500'
  },
  feeAmount: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4B5563'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20
  },
  confirmButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
export default TransactionFeesScreen;