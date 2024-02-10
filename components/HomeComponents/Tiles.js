import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function BhajanTile({item}) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: `${item.image}` }} />
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        // flex:1,
        marginHorizontal:5
      },
      image:{
        height:100,
        width:150
      }
})