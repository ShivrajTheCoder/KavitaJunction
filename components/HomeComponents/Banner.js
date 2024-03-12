import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function Banner() {
  return (
    <View style={[styles.container, { height: windowHeight * 0.2 }]}>
      <Text style={styles.bannerText}>Banner image here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e76f51', // Set your desired background color
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Set your desired text color
  },
});
