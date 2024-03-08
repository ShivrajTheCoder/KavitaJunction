import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import BhajanTile from './Tiles'

const data = [
  {
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg",
    id: 1,
  },
  {
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575262/kj%20images/audiocover2_pmjzej.jpg",
    id: 2,
  },
  {
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575262/kj%20images/audio1_owdar0.jpg",
    id: 3,
  },
  {
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg",
    id: 4,
  },
]

export default function BhajanContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Continue Watching with Kaho Ji</Text>
      <ScrollView horizontal={true} style={styles.tileScroll}>
        <View style={styles.tileCont}>
          {
            data.map(item => {
              return (
                <BhajanTile key={item.id} item={item} />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#022b3a",
    padding: 10,
  },
  heading: {
    color: "white",
    fontSize: 15,
    // fontWeight:900
  },
  tileScroll: {
    marginTop: 10,
    marginBottom: 10,
  },
  tileCont: {
    display: "flex",
    flexDirection: "row",
  }
})
