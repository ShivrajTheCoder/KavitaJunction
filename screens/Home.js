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
import Circles from './SliderScreens/Circles';
import AllChannels from './SliderScreens/AllChannels';
import All from './SliderScreens/All';
import Community from './SliderScreens/Community';
import Details from './Details';

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showComp, setShowComp] = useState('all');
  const splashSize = new Animated.Value(200);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(splashSize, {
          toValue: 250,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(splashSize, {
          toValue: 200,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      splashSize.stopAnimation();
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCategoryChange = (category) => {
    setShowComp(category);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {showSplash ? (
        <View style={styles.splashCont}>
          <Animated.Image
            style={[styles.splashImg, { width: splashSize, height: splashSize }]}
            source={{
              uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1710155799/kj%20images/kahojilogo-modified_ft0kex.png"
            }}
          />
          <Text style={styles.splashText}>Kaho G</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
          <HomeNav toggleSidebar={toggleSidebar} />
          <CategoriesSlider changeCategory={handleCategoryChange} selectedComp={showComp} />
          {showComp === 'All' && <All />}
          {showComp === 'Podcasts' && <Details />}
          {showComp === 'Channels' && <AllChannels />}
          {showComp === 'E-books' && <Details />}
          {showComp === 'Communites' && <Community />}
          {showComp === 'Audiobooks' && <Details />}
          {showComp === 'Circles' && <Circles />}
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
    resizeMode: 'contain',
  },
});
