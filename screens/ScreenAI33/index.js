import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
const FAQ_DATA = [{
  id: '1',
  question: 'What is React Native?',
  answer: 'React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use React along with native platform capabilities.'
}, {
  id: '2',
  question: 'How does React Native work?',
  answer: 'React Native uses native components instead of web components as building blocks. It communicates with the native platform using a bridge, which is a C++/Java module that allows for message passing between the JavaScript code and the native platform.'
}, {
  id: '3',
  question: 'What are the advantages of React Native?',
  answer: 'React Native allows for faster development, code sharing between platforms, and a large community of developers. It also provides a more native-like experience for users compared to hybrid mobile app frameworks.'
}, {
  id: '4',
  question: 'What are the limitations of React Native?',
  answer: 'React Native may not be suitable for apps with complex animations or high-performance requirements. Additionally, it may require native development knowledge for certain platform-specific features.'
}];

const FAQScreen = () => {
  const [expandedId, setExpandedId] = React.useState(null);

  const toggleExpand = id => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.itemContainer} onPress={() => toggleExpand(item.id)}>
      <Text style={styles.question}>{item.question}</Text>
      {expandedId === item.id && <Text style={styles.answer}>{item.answer}</Text>}
    </TouchableOpacity>;

  return <View style={styles.container}>
      <FlatList data={FAQ_DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  answer: {
    fontSize: 16,
    color: '#777'
  }
});
export default FAQScreen;