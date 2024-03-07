import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data = [
  { id: 1, title: 'Song Title 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Song Title 2', image: 'https://via.placeholder.com/150' },
];

const RecentlyWatched = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState(null); // Track currently playing song

  const handlePlayPress = (song) => {
    setRecentlyPlayed(song); // Update state to mark song as playing
    // Handle actual audio playback logic here (using your preferred audio library)
    console.log(`Playing: ${song.title}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <View style={styles.actions}>
          <TouchableOpacity onPress={() => handlePlayPress(item)}>
            <Image source={{uri:"https://res.cloudinary.com/dushmacr8/image/upload/v1707581213/kj%20images/icons/play_pal4kz.png"}} style={styles.playIcon} />
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal:10
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1, // Allow details to fill remaining space
  },
  title: {
    fontSize: 16,
    // fontWeight: 'bold',
    color:"white"
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align icons to the right
  },

  hamburgerIcon: {
    width: 20,
    height: 20,
  },
});

export default RecentlyWatched;
