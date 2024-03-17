import React from 'react';
import { View, StyleSheet, Text, Dimensions, ImageBackground } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function Banner() {
  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg' }}
      style={[styles.container, { height: windowHeight * 0.2 }]}
    >
      {/* <Text style={styles.bannerText}>Banner text here</Text> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
