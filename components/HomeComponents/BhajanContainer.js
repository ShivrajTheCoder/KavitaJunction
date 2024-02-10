import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BhajanTile from './BhajanTile'

export default function BhajanContainer() {
  return (
    <View style={styles.container}>
        <Text>Bhajan container</Text>
        <View>
            <BhajanTile/>
            <BhajanTile/>
            <BhajanTile/>
            <BhajanTile/>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    // flex:1,
    flexDirection:"column"
  }
})
