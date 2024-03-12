import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SearchBar from '../components/SearchComponents/SearchBar'
import TopNav from '../components/TopNav'

import CategoryCard from '../components/SearchComponents/CategoryCard';

const data = [
  {
    name: "Podcasts",
    subcategories: [
      "True Crime",
      "Comedy",
      "Technology",
      "Business",
      "Health & Wellness",
    ]
  },
  {
    name: "Movies",
    subcategories: [
      "Action",
      "Comedy",
      "Drama",
      "Horror",
      "Science Fiction",
    ]
  },
  {
    name: "TV Shows",
    subcategories: [
      "Drama Series",
      "Comedy Series",
      "Reality TV",
      "Documentaries",
      "Crime & Mystery",
    ]
  },
  {
    name: "Music",
    subcategories: [
      "Pop",
      "Rock",
      "Hip Hop",
      "Electronic",
      "Jazz",
    ]
  },
  {
    name: "Books",
    subcategories: [
      "Fiction",
      "Non-fiction",
      "Mystery & Thriller",
      "Fantasy",
      "Biography",
    ]
  },
  {
    name: "Games",
    subcategories: [
      "Action",
      "Adventure",
      "Role-playing",
      "Strategy",
      "Simulation",
    ]
  },
  {
    name: "Comics",
    subcategories: [
      "Superheroes",
      "Manga",
      "Graphic Novels",
      "Webcomics",
      "Slice of Life",
    ]
  },
  {
    name: "Sports",
    subcategories: [
      "Football",
      "Basketball",
      "Soccer",
      "Tennis",
      "Golf",
    ]
  },
  {
    name: "Cooking",
    subcategories: [
      "Recipes",
      "Healthy Eating",
      "Baking",
      "International Cuisine",
      "Quick & Easy Meals",
    ]
  },
  {
    name: "Travel",
    subcategories: [
      "Adventure Travel",
      "Cultural Exploration",
      "Food Tourism",
      "Eco-Tourism",
      "Luxury Travel",
    ]
  }
];

export default function Search() {
  return (
    <View style={styles.scrollView}>
      <TopNav />
      <View style={styles.container}>
        <SearchBar />
        <ScrollView style={styles.scrollCont} >
          <View style={styles.categoryCont} >
            {
              data.map((data) => <CategoryCard key={data.name} data={data} />)
            }
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  container: {
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  scrollCont:{
    marginBottom:50,
    marginTop:10
  }
});
