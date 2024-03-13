import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backIcon = <Ionicons name="arrow-back" size={24} color="black" />;

export default function CreatorStudio({ navigation }) {
    const handleBack = () => {
        navigation.goBack();
    };

    const handleBuy = () => {
        // Handle buy action
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <View style={styles.headingContainer}>
                <TouchableOpacity onPress={handleBack}>
                    {backIcon}
                </TouchableOpacity>
                <Text style={styles.headingText}>Creator Studio</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                {/* Your content goes here */}
            </View>

            {/* Buy Button */}
            <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
                <Text style={styles.buyText}>Buy at $500</Text>
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
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    screenName: {
        fontSize: 18,
        color: 'black',
        marginLeft: 10,
    },
    content: {
        flex: 1,
        // Your content styles go here
    },
    buyButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    buyText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 50,
      },
});
