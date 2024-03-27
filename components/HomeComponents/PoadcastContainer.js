import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ThemeContext from '../../contexts/ThemeProvider';
import axios from 'axios';

export default function PodcastContainer() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/category/getallcategories`);
        if (response.status === 200) {
          const { categories } = response.data;
          setCategories(categories);
        } else {
          console.error('Failed to fetch categories:', response.statusText);
          setError('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Error fetching categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext
  // const podcasts = [
  //   { category: 'Cinema', backgroundColor: '#ff6347' },
  //   { category: 'Sangeet', backgroundColor: '#4682b4' },
  //   { category: 'Sahitya', backgroundColor: '#2e8b57' },
  //   { category: 'Shiksha', backgroundColor: '#f4a460' },
  //   { category: 'Social', backgroundColor: '#9370db' },
  //   { category: 'Popular', backgroundColor: '#ffa500' },
  // ];
  // Function to generate random background color
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: theme === 'dark' ? 'white' : 'black' }]}>Podcasts</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <View key={index} style={[styles.block, { backgroundColor: generateRandomColor() }]}>
              <Text style={styles.text}>{category.category_name}</Text>
            </View>
          ))}
        </ScrollView>
      )}
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
