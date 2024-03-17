import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function OriginalsContainer() {
  // Sample data for Originals
  const originals = [
    { category: 'podcasts', backgroundColor: '#ff6347' },
    { category: 'events', backgroundColor: '#4682b4' },
    { category: 'ebooks', backgroundColor: '#2e8b57' },
    { category: 'audiobooks', backgroundColor: '#f4a460' },
    { category: 'channels', backgroundColor: '#9370db' },
    { category: 'community circles', backgroundColor: '#ffa500' },
    { category: 'pathshala', backgroundColor: '#ff6347' },
    { category: 'karyashala', backgroundColor: '#4682b4' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>KahoG Originals & Events</Text>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false} >
        {originals.map((original, index) => (
          <View key={index} style={[styles.block, { backgroundColor: original.backgroundColor }]}>
            <Text style={styles.text}>{original.category}</Text>
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
    width: 150,
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
