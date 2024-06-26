import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SongTile from './Tiles';
import ThemeContext from '../../contexts/ThemeProvider';

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
];

export default function SongsContainer() {
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? 'white' : 'black' }]}>Listen with Kaho G</Text>
      <ScrollView horizontal={true} style={styles.tileScroll} showsHorizontalScrollIndicator={false}>
        <View style={styles.tileCont}>
          {
            data.map(item => {
              return (
                <SongTile key={item.id} item={item} />
              );
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tileScroll: {
    marginTop: 10,
    marginBottom: 10,
  },
  tileCont: {
    display: "flex",
    flexDirection: "row",
  },
});
