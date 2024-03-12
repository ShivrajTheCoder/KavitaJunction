import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Mentor() {
  return (
    <View style={styles.container}>
      <View style={styles.headingCont}>
        <Text style={styles.heading}>Our Mentors</Text>
      </View>
      <View style={styles.mentorCont}>
        <View style={styles.mentorCard} >
          <Image style={styles.profileImg} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }} />
          <Text style={styles.name} >Name</Text>
          <Text style={styles.other} >Position</Text>
          <Text style={styles.other} >Location</Text>
        </View>
        <View style={styles.mentorCard} >
          <Image style={styles.profileImg} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }} />
          <Text style={styles.name} >Name</Text>
          <Text style={styles.other} >Position</Text>
          <Text style={styles.other} >Location</Text>
        </View>
        <View style={styles.mentorCard} >
          <Image style={styles.profileImg} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }} />
          <Text style={styles.name} >Name</Text>
          <Text style={styles.other} >Position</Text>
          <Text style={styles.other} >Location</Text>
        </View>
        <View style={styles.mentorCard} >
          <Image style={styles.profileImg} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }} />
          <Text style={styles.name} >Name</Text>
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
    backgroundColor: "white",
  },
  headingCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  mentorCont: {
    flexDirection: "row", // Set flexDirection to 'row'
    justifyContent: "space-around", // Align items with space around
    padding: 10,
  flexWrap:"wrap"
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom:10
  },
  mentorCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    width: "45%",
    padding: 5,
    borderRadius: 20,
    marginVertical:10,
    paddingVertical:10
  },
  name: {
    color: "white",
    fontWeight: "bold",
    marginVertical: 5,
    fontSize: 15,
    marginBottom:5
  },
  other: {
    color: "#a3b18a",
  }
});
