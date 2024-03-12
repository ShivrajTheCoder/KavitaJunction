import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backIcon = <Ionicons name="arrow-back" size={24} color="black" />;

export default function Referandwin({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleInvite = () => {
    // Implement functionality to invite via WhatsApp
  };

  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.headingContainer}>
        <TouchableOpacity onPress={handleBack}>
          {backIcon}
        </TouchableOpacity>
        <Text style={styles.headingText}>Refer & Win</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleInvite}>
        <Text style={styles.buttonText}>Invite via WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonContainer: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
