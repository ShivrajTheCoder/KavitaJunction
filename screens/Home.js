import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Banner from '../components/HomeComponents/Banner';
import BhajanContainer from '../components/HomeComponents/BhajanContainer';
import SongContainer from '../components/HomeComponents/SongsContainer';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Banner />
        <BhajanContainer />
        <SongContainer />
      </View>
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
  }
});
