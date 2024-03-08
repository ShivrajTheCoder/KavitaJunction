import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function SearchOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Mentor')} style={styles.button}>
          <Text style={styles.buttonText}>Mentor</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mentor')} style={styles.button}>
          <Text style={styles.buttonText}>Courses</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Coaches')} style={styles.button}>
          <Text style={styles.buttonText}>Coaches</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mentor')} style={styles.button}>
          <Text style={styles.buttonText}>Learning</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    width: '45%', // Set width of each button
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
