import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import UserInfo from '../components/DetailsComponents/UserInfo'
import CategoriesSlider from '../components/DetailsComponents/CategoriesSlider'
import PlayNavbar from '../components/PlayComponents/PlayNavbar'
import PlaybackTile from '../components/PlayComponents/PlaybackTile'

export default function Play() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <PlayNavbar />
        <CategoriesSlider />
        <PlaybackTile/>
      </View>
    </ScrollView>
  )
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
