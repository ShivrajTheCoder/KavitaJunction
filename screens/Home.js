import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Banner from '../components/HomeComponents/Banner'
import BhajanContainer from '../components/HomeComponents/BhajanContainer'
import SongContainer from '../components/HomeComponents/SongsContainer'

export default function Home() {
  return (
    <View style={styles.container}>
        <Banner/>
        <BhajanContainer/>
        <SongContainer/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:"#022b3a",
  }
})