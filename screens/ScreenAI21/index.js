import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = [{
    id: '1',
    last4: '1234',
    brand: 'Visa'
  }, {
    id: '2',
    last4: '5678',
    brand: 'Mastercard'
  }, {
    id: '3',
    last4: '9012',
    brand: 'American Express'
  }];
  const amount = 100;

  const renderItem = ({
    item
  }) => <TouchableOpacity style={[styles.card, selectedCard === item.id && styles.selectedCard]} onPress={() => setSelectedCard(item.id)}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.cardImage} />
      <Pressable><Text style={styles.cardText}>{`${item.brand} **** **** **** ${item.last4}`}</Text></Pressable>
    </TouchableOpacity>;

  return <Pressable onPress={() => {
    navigation.navigate("ScreenAI23");
  }}><View style={styles.container}>
      <Text style={styles.amountText}>Amount: ${amount.toFixed(2)}</Text>
      <FlatList data={cards} renderItem={renderItem} keyExtractor={item => item.id} extraData={selectedCard} />
      <TouchableOpacity style={styles.payButton} onPress={() => console.log('Payment submitted')} disabled={!selectedCard}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </View></Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  selectedCard: {
    borderColor: '#6200EE'
  },
  cardImage: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15
  },
  cardText: {
    fontSize: 18
  },
  payButton: {
    backgroundColor: '#6200EE',
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default PaymentScreen;