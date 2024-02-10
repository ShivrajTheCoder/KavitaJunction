import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Banner() {
  return (
    <View style={styles.container}>
        <Text>Image</Text>
        <Image style={styles.image} source={{uri:"https://res.cloudinary.com/dushmacr8/image/upload/v1707575261/kj%20images/android-chrome-192x192_ksgsz2.png"}}/>
        <Text>Banner</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:30
    },
    image: {
      width: 100,
      height: 100,
    },
  });
  