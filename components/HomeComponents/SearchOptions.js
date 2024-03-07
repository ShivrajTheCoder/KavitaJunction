import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchOptions() {
  return (
    <View style={styles.container}>
      <Text style={styles.tile}>Mentors</Text>
      <Text style={styles.tile}>Replays</Text>
      <Text style={styles.tile}>Coaches</Text>
      <Text style={styles.tile}>Learning</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow wrapping if needed
    justifyContent: 'space-around',
    padding: 10,
    
    borderRadius: 5,
  },
  tile: {
    backgroundColor: '#333',
    margin:5,
    color: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1, // Set flex to 1 for equal distribution of remaining space
    flexBasis: '40%', // Set a minimum width for each tile (48% here)
  },
});
