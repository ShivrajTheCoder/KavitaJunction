import React, { useContext } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import ThemeContext from '../../contexts/ThemeProvider'; // Import ThemeContext

export default function RecentReplays() {
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  // Define icons based on the current theme
  const playIcon = theme === 'dark' ? (
    <Entypo name="controller-play" size={20} color="white" />
  ) : (
    <Entypo name="controller-play" size={20} color="black" />
  );

  const dotsIcon = theme === 'dark' ? (
    <Entypo name="dots-three-vertical" size={20} color="white" />
  ) : (
    <Entypo name="dots-three-vertical" size={20} color="black" />
  );

  const headphoneIcon = theme === 'dark' ? (
    <Feather name="headphones" size={20} color="white" />
  ) : (
    <Feather name="headphones" size={20} color="black" />
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, theme === 'dark' && styles.darkHeading]}>Recent Replays: Speak English</Text>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View style={styles.audioListsContainer}>
          <View style={styles.audioListWrapper}>
            <View style={styles.audioList}>
              <View style={styles.audioItem}>
                <View style={styles.infoContainer}>
                  <Text style={[styles.audioName, theme === 'dark' && styles.darkText]}>Audio 1</Text>
                  <View style={styles.additionalInfo}>
                    {headphoneIcon}
                    <Text style={[styles.date, theme === 'dark' && styles.darkText]}>10-12 MAR 2024</Text>
                    <Text style={[styles.date, theme === 'dark' && styles.darkText]}>11:30 AM</Text>
                  </View>
                </View>
                <View style={styles.actions}>
                  {playIcon}
                  {dotsIcon}
                </View>
              </View>
              <View style={styles.audioItem}>
                <View style={styles.infoContainer}>
                  <Text style={[styles.audioName, theme === 'dark' && styles.darkText]}>Audio 1</Text>
                  <View style={styles.additionalInfo}>
                    {headphoneIcon}
                    <Text style={[styles.date, theme === 'dark' && styles.darkText]}>10-12 MAR 2024</Text>
                    <Text style={[styles.date, theme === 'dark' && styles.darkText]}>11:30 AM</Text>
                  </View>
                </View>
                <View style={styles.actions}>
                  {playIcon}
                  {dotsIcon}
                </View>
              </View>
              <View style={styles.audioItem}>
                <View style={styles.infoContainer}>
                  <Text style={[styles.audioName, theme === 'dark' && styles.darkText]}>Audio 1</Text>
                  <View style={styles.additionalInfo}>
                    {headphoneIcon}
                    <Text style={[styles.date, theme === 'dark' && styles.darkText]}>10-12 MAR 2024</Text>
                    <Text style={[styles.date, theme === 'dark' && styles.darkText]}>11:30 AM</Text>
                  </View>
                </View>
                <View style={styles.actions}>
                  {playIcon}
                  {dotsIcon}
                </View>
              </View>
              <View style={styles.audioItem}>
                <View style={styles.infoContainer}>
                  <Text style={[styles.audioName, theme === 'dark' && styles.darkText]}>Audio 1</Text>
                  <View style={styles.additionalInfo}>
                    {headphoneIcon}
                    <Text style={[styles.date, theme === 'dark' && styles.darkText]}>10-12 MAR 2024</Text>
                    <Text style={[styles.date, theme === 'dark' && styles.darkText]}>11:30 AM</Text>
                  </View>
                </View>
                <View style={styles.actions}>
                  {playIcon}
                  {dotsIcon}
                </View>
              </View>
              {/* Add more audio items as needed */}
            </View>
          </View>
          {/* Add more audio lists as needed */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  darkHeading: {
    color: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  audioListsContainer: {
    flexDirection: 'row',
  },
  audioListWrapper: {
    marginRight: 10, // Adjust spacing between lists
  },
  audioList: {
    flexDirection: 'column',
  },
  audioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 200, // Adjust as needed
    marginBottom: 10,
  },
  audioName: {
    fontSize: 16,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  darkText: {
    color: 'white', // White text color for dark mode
  },
  infoContainer: {
    flexDirection: 'column',
  },
  additionalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  date: {
    fontSize: 12,
    marginHorizontal: 10,
  },
  actions: {
    flexDirection: 'row',
  },
});
