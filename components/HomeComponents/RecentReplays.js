import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

const play = <Entypo name="controller-play" size={20} color="white" />;
const threedots = <Entypo name="dots-three-vertical" size={20} color="white" />;
const headphone = <Feather name="headphones" size={20} color="white" />;

export default function RecentReplays() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Replays: Speak English</Text>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View style={styles.audioListsContainer}>
          <View style={styles.audioListWrapper}>
            <View style={styles.audioList}>
              <View style={styles.audioItem}>
                <View style={styles.infoContainer}>
                  <Text style={styles.audioName}>Audio 1</Text>
                  <View style={styles.additionalInfo}>
                    {headphone}
                    <Text style={styles.date}>10-12 MAR 2024</Text>
                    <Text style={styles.date}>11:30 AM</Text>
                  </View>
                </View>
                <View style={styles.actions}>
                  {play}
                  {threedots}
                </View>
              </View>
              <View style={styles.audioItem}>
                <View style={styles.infoContainer}>
                  <Text style={styles.audioName}>Audio 1</Text>
                  <View style={styles.additionalInfo}>
                    {headphone}
                    <Text style={styles.date}>10-12 MAR 2024</Text>
                    <Text style={styles.date}>11:30 AM</Text>
                  </View>
                </View>
                <View style={styles.actions}>
                  {play}
                  {threedots}
                </View>
              </View>
              <View style={styles.audioItem}>
                <View style={styles.infoContainer}>
                  <Text style={styles.audioName}>Audio 1</Text>
                  <View style={styles.additionalInfo}>
                    {headphone}
                    <Text style={styles.date}>10-12 MAR 2024</Text>
                    <Text style={styles.date}>11:30 AM</Text>
                  </View>
                </View>
                <View style={styles.actions}>
                  {play}
                  {threedots}
                </View>
              </View>
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
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    marginHorizontal: 10,
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
    color: 'white',
    fontSize: 12,
    marginHorizontal: 10,
  },
  actions: {
    flexDirection: 'row',
  },
});
