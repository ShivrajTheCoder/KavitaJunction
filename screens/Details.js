import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserInfo from '../components/DetailsComponents/UserInfo'
import CategoriesSlider from '../components/DetailsComponents/CategoriesSlider'
import ProfileContainer from '../components/DetailsComponents/ProfileContainer'

export default function Details() {
  return (
    <View style={styles.container}>
        <UserInfo/>
        <CategoriesSlider/>
        <ProfileContainer/>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:"#022b3a",
    // height:"100%",
  }
})