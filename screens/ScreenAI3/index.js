import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
const {
  width
} = Dimensions.get("window");

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [{
    image: "https://tinyurl.com/42evm3m3",
    text: "Feature 1: Lorem ipsum dolor sit amet."
  }, {
    image: "https://tinyurl.com/42evm3m3",
    text: "Feature 2: Consectetur adipiscing elit."
  }, {
    image: "https://tinyurl.com/42evm3m3",
    text: "Feature 3: Sed do eiusmod tempor incididunt."
  }];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return <View style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={event => {
      setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width));
    }} scrollEventThrottle={16}>
        {slides.map((slide, index) => <View key={index} style={styles.slide}>
            <Image source={{
          uri: slide.image
        }} style={styles.image} />
            <Text style={styles.text}>{slide.text}</Text>
          </View>)}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: "contain"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30
  },
  button: {
    backgroundColor: "#4b7bec",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold"
  }
});
export default OnboardingScreen;