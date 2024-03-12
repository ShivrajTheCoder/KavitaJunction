import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Animated, Easing } from 'react-native';
import Banner from '../components/HomeComponents/Banner';
import BhajanContainer from '../components/HomeComponents/BhajanContainer';
import SongContainer from '../components/HomeComponents/SongsContainer';
import LiveContainer from '../components/HomeComponents/LiveContainer';
import ProfileContainer from '../components/DetailsComponents/ProfileContainer';
import SearchOptions from '../components/HomeComponents/SearchOptions';
import HomeNav from '../components/HomeComponents/HomeNav';
import CategoriesSlider from '../components/DetailsComponents/CategoriesSlider';
import RecentReplays from '../components/HomeComponents/RecentReplays';
import Sidebar from '../components/Layout/Sidebar';

export default function Home({ navigation }) {
  // const [showSplash, setShowSplash] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {showSplash ? (
        <View style={styles.splashCont}>
          <Animated.Image
            style={[styles.splashImg, { width: splashSize, height: splashSize }]} // Apply animated size
            source={{
              uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1710155799/kj%20images/kahojilogo-modified_ft0kex.png"
            }}
          />
          <Text style={styles.splashText}>Kaho Ji</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
          <HomeNav toggleSidebar={toggleSidebar} />
          <CategoriesSlider />
          <Banner />
          <LiveContainer />
          <ProfileContainer live={true} />
          <BhajanContainer />
          <SongContainer />
          <RecentReplays />
          <SearchOptions navigation={navigation} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  container: {
    paddingBottom: 20,
  },
  splashText: {
    color: "black",
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
