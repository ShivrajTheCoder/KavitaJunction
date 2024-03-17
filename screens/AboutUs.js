import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.text}>
        KahoG is a leading media streaming platform that offers a wide range of content including audio, video, podcasts, and ebooks. 
        Our mission is to provide users with high-quality entertainment and educational content at their fingertips.
      </Text>
      <Text style={styles.subHeading}>Our Services:</Text>
      <View style={styles.listItem}>
        <Text>- Streaming of audios and videos</Text>
      </View>
      <View style={styles.listItem}>
        <Text>- Premium podcasts</Text>
      </View>
      <View style={styles.listItem}>
        <Text>- Sales of ebooks, books, and audiobooks</Text>
      </View>
      <Text style={styles.subHeading}>Contact Us:</Text>
      <Text style={styles.text}>
        For any inquiries or feedback, feel free to reach out to us at support@kahog.com.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginRight: 5,
  },
});
