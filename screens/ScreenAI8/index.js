import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = `
  1. Introduction
  Welcome to our application. By using our services, you are agreeing to these terms. Please read them carefully.

  2. Using our Services
  You must follow any policies made available to you within the Services. Don't misuse our Services. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations.

  3. Privacy
  Our privacy policy explains how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that we can use such data in accordance with our privacy policy.

  4. Content
  All content provided on our application is for informational purposes only. We make no representations as to the accuracy or completeness of any information on this site or found by following any link on this site.

  5. Changes to Terms
  We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We'll post notice of modifications to these terms on this page.

  6. Liability
  In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this application.

  7. Governing Law
  These terms and conditions are governed by and construed in accordance with the laws of our country and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
  `;
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Terms and Conditions</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>{termsAndConditions}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
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
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1E88E5'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333'
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#1A237E'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
export default TermsAndConditionsScreen;