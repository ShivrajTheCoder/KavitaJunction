import React from 'react'
import { ScrollView, View } from 'react-native'
import UserInfo from '../components/DetailsComponents/UserInfo'
import CategoriesSlider from '../components/DetailsComponents/CategoriesSlider'

export default function Orientation() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <UserInfo />
        <CategoriesSlider />
        
      </View>
    </ScrollView>
  )
}
