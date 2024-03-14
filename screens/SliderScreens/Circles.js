import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CircleTile from '../../components/HomeComponents/SliderComponents/CirleTiles';


export default function Circles() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Render multiple CircleTile components */}
      <CircleTile />
      <CircleTile />
      <CircleTile />
      {/* Add more CircleTile components as needed */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff', // Set the background color as needed
  },
});
