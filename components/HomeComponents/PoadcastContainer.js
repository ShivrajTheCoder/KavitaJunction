import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PodcastContainer() {
  // Sample podcast data
  const podcasts = [
    { category: 'cinema', backgroundColor: '#ff6347' },
    { category: 'sangeet', backgroundColor: '#4682b4' },
    { category: 'sahitya', backgroundColor: '#2e8b57' },
    { category: 'hiksha', backgroundColor: '#f4a460' },
    { category: 'social', backgroundColor: '#9370db' },
    { category: 'popular', backgroundColor: '#ffa500' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Podcasts</Text>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false} >
        {podcasts.map((podcast, index) => (
          <View key={index} style={[styles.block, { backgroundColor: podcast.backgroundColor }]}>
            <Text style={styles.text}>{podcast.category}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  block: {
    width: 150, // Adjust width according to your preference
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
