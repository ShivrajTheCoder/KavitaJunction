import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import UserInfo from '../components/DetailsComponents/UserInfo'
import CategoriesSlider from '../components/DetailsComponents/CategoriesSlider'
import SearchBar from '../components/SearchComponents/SearchBar'
import TileContainer from '../components/SearchComponents/TileContainer'

export default function Search() {
  return (
    <View style={styles.scrollView}>
      <View style={styles.container}>
        <SearchBar />
        <Text style={styles.text}>People Also Searched For</Text>
        <CategoriesSlider />
        <TileContainer />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: "#022b3a",
  },
  container: {
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10
  }
});
