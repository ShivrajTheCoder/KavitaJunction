import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backIcon = <Ionicons name="arrow-back" size={24} color="black" />;

export default function Notifications({ navigation }) {
    const handleBack = () => {
        navigation.goBack();    // Handle back button press
    };

    return (
        <ScrollView style={styles.container}>
            {/* Heading */}
            <View style={styles.headingContainer}>
                <TouchableOpacity onPress={handleBack}>
                    {backIcon}
                </TouchableOpacity>
                <Text style={styles.headingText}>Notifications</Text>
            </View>

            {/* Notification Content */}
            <View style={styles.notificationContainer}>
                {/* Date of Notification */}
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>March 13, 2024</Text>
                </View>

                {/* Notifications */}
                <View style={styles.notificationItem}>
                    <View style={styles.profile} >
                        <Text style={{ color: 'white' }}>M</Text>
                    </View>
                    <Text style={styles.notificationText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam minus aspernatur</Text>
                </View>
                <View style={styles.notificationItem}>
                    <View style={styles.profile} >
                        <Text style={{ color: 'white' }}>M</Text>
                    </View>
                    <Text style={styles.notificationText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam minus aspernatur</Text>
                </View>
                <View style={styles.notificationItem}>
                    <View style={styles.profile} >
                        <Text style={{ color: 'white' }}>M</Text>
                    </View>
                    <Text style={styles.notificationText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam minus aspernatur</Text>
                </View>
            </View>
            <View style={styles.notificationContainer}>
                {/* Date of Notification */}
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>March 13, 2024</Text>
                </View>

                {/* Notifications */}
                <View style={styles.notificationItem}>
                    <View style={styles.profile} >
                        <Text style={{ color: 'white' }}>M</Text>
                    </View>
                    <Text style={styles.notificationText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam minus aspernatur</Text>
                </View>
            </View>

            {/* Add more dates and notifications as needed */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    notificationContainer: {
        marginBottom: 20,
    },
    dateContainer: {
        // backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    dateText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    notificationItem: {
        // backgroundColor: '#f9f9f9',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    notificationText: {
        fontSize: 12,
        marginLeft: 10
    },
    profile: {
        backgroundColor: "red",
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    }
});
