import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CircleTile from '../../components/HomeComponents/SliderComponents/CirleTiles';
import ThemeContext from '../../contexts/ThemeProvider';

export default function Circles() {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView contentContainerStyle={[styles.scrollViewContent, { backgroundColor: theme === 'dark' ? '#1e1e1e' : '#fff' }]}>
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
  },
});
