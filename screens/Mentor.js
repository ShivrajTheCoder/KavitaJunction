import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ThemeContext from '../contexts/ThemeProvider';

export default function Mentor() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
      <View style={styles.headingCont}>
        <Text style={[styles.heading, { color: theme === 'dark' ? 'white' : 'black' }]}>Our Mentors</Text>
      </View>
      <View style={styles.mentorCont}>
        <View style={styles.mentorCard} >
          <Image style={styles.profileImg} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }} />
          <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Name</Text>
          <Text style={styles.other} >Position</Text>
          <Text style={styles.other} >Location</Text>
        </View>
        <View style={styles.mentorCard} >
          <Image style={styles.profileImg} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }} />
          <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Name</Text>
          <Text style={styles.other} >Position</Text>
          <Text style={styles.other} >Location</Text>
        </View>
        <View style={styles.mentorCard} >
          <Image style={styles.profileImg} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }} />
          <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Name</Text>
          <Text style={styles.other} >Position</Text>
          <Text style={styles.other} >Location</Text>
        </View>
        <View style={styles.mentorCard} >
          <Image style={styles.profileImg} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }} />
          <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Name</Text>
          <Text style={styles.other} >Position</Text>
          <Text style={styles.other} >Location</Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  headingCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  mentorCont: {
    flexDirection: "row", // Set flexDirection to 'row'
    justifyContent: "space-around", // Align items with space around
    padding: 10,
    flexWrap: "wrap",
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  mentorCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    width: "45%",
    padding: 5,
    borderRadius: 20,
    marginVertical: 10,
    paddingVertical: 10,
  },
  name: {
    fontWeight: "bold",
    marginVertical: 5,
    fontSize: 15,
    marginBottom: 5,
  },
  other: {
    color: "#a3b18a",
  }
});
