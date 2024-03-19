import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ThemeContext from '../../contexts/ThemeProvider';

export default function OriginalsContainer() {
  // Sample data for Originals
  const originals = [
    { category: 'Podcasts', backgroundColor: '#ff6347' },
    { category: 'Events', backgroundColor: '#4682b4' },
    { category: 'E-books', backgroundColor: '#2e8b57' },
    { category: 'Audiobooks', backgroundColor: '#f4a460' },
    { category: 'Channels', backgroundColor: '#9370db' },
    { category: 'Community circles', backgroundColor: '#ffa500' },
    { category: 'Pathshala', backgroundColor: '#ff6347' },
    { category: 'Karyashala', backgroundColor: '#4682b4' },
  ];

  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: theme === 'dark' ? 'white' : 'black' }]}>Kaho G Originals & Events</Text>
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
