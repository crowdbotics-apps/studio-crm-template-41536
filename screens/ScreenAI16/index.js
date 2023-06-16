import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const FavoriteItem = ({
  item
}) => <View style={styles.itemContainer}>
    <Image source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} style={styles.itemImage} />
    <Text style={styles.itemName}>{item.name}</Text>
    <TouchableOpacity style={styles.detailsButton}>
      <Text style={styles.detailsButtonText}>See details</Text>
    </TouchableOpacity>
  </View>;

const FavoritesScreen = () => {
  const [search, setSearch] = useState('');
  const favoriteItems = [{
    id: '1',
    name: 'Item 1'
  }, {
    id: '2',
    name: 'Item 2'
  }, {
    id: '3',
    name: 'Item 3'
  }];
  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TextInput style={styles.searchBar} onChangeText={setSearch} value={search} placeholder="Search" />
      </View>
      <FlatList data={favoriteItems} renderItem={({
      item
    }) => <FavoriteItem item={item} />} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  backButton: {
    backgroundColor: '#4A4A4A',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginLeft: 16
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  itemName: {
    flex: 1,
    marginLeft: 16,
    fontSize: 18
  },
  detailsButton: {
    backgroundColor: '#4A4A4A',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8
  },
  detailsButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  }
});
export default FavoritesScreen;