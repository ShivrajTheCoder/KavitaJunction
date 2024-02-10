import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SongTile from './Tiles'

const data = [
  {
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-6_tusovr.jpg",
    id: 1,
  },
  {
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-4_fo1yx6.jpg",
    id: 2,
  },
  {
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-5_vhawaz.jpg",
    id: 3,
  },
  {
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575266/kj%20images/episodes-2_attb17.jpg",
    id: 4,
  },
]

export default function SongsContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Listen with Kavita Junction</Text>
      <ScrollView horizontal={true} style={styles.tileScroll}>
        <View style={styles.tileCont}>
          {
            data.map(item => {
              return (
                <SongTile key={item.id} item={item} />
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
