import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BhajanTile from './BhajanTile'
import SongTile from './SongTile'

export default function SongContainer() {
  return (
    <View>
        <Text>Song container</Text>
        <View>
            <SongTile/>
            <SongTile/>
            <SongTile/>
            <SongTile/>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})