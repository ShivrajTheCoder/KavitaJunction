import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Animated, Easing } from 'react-native';
import Banner from '../components/HomeComponents/Banner';
import BhajanContainer from '../components/HomeComponents/BhajanContainer';
import SongContainer from '../components/HomeComponents/SongsContainer';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const splashSize = new Animated.Value(200); // Initial size of the splash image

  useEffect(() => {
    // Start the animation when the component mounts
    Animated.loop(
      Animated.sequence([
        
        Animated.timing(splashSize, {
          toValue: 250, // Increase the size to 250
          duration: 1000, // Duration for increasing size
          easing: Easing.linear, // Easing function for smooth animation
          useNativeDriver: false, // Necessary for animated images
        }),
        Animated.timing(splashSize, {
          toValue: 200, // Decrease the size back to 200
          duration: 1000, // Duration for decreasing size
          easing: Easing.linear, // Easing function for smooth animation
          useNativeDriver: false, // Necessary for animated images
        }),
      ])
    ).start(); // Start the animation loop

    // Simulate loading process
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // Adjust the duration as needed

    return () => {
      clearTimeout(timer); // Cleanup timer on unmount
      splashSize.stopAnimation(); // Stop the animation when unmounting
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {showSplash ? (
        <View style={styles.splashCont}>
          <Animated.Image
            style={[styles.splashImg, { width: splashSize, height: splashSize }]} // Apply animated size
            source={{
              uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575261/kj%20images/android-chrome-192x192_ksgsz2.png"
            }}
          />
          <Text style={styles.splashText}>Kavita Junction</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Banner />
          <BhajanContainer />
          <SongContainer />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: "#022b3a",
  },
  container: {
    paddingBottom: 20,
  },
  splashText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  splashCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  splashImg: {
    resizeMode: 'contain', // Ensure the image doesn't stretch beyond its actual size
  },
});
