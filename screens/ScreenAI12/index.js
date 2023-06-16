import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

const CameraOptionsScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = option => {
    setSelectedOption(option);
  };

  return <View style={styles.container}>
      <ImageBackground source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.backgroundImage}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('upload')}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.optionImage} />
            <Text style={styles.optionText}>Upload from local storage</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('capture')}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.optionImage} />
            <Text style={styles.optionText}>Capture with camera</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  option: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '40%'
  },
  optionImage: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default CameraOptionsScreen;