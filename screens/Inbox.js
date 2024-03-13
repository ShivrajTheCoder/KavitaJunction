import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backIcon = <Ionicons name="arrow-back" size={24} color="black" />;

export default function Inbox({ navigation }) {
    const [message, setMessage] = useState('');

    const handleBack = () => {
        navigation.goBack();    // Handle back button press
    };

    const handleMessageSend = () => {
        // Handle message send
        // You can add your logic to send the message
        console.log('Message sent:', message);
        // Clear input field after sending message
        setMessage('');
    };

    return (
        <ScrollView style={styles.container}>
            {/* Heading */}
            <View style={styles.headingContainer}>
                <TouchableOpacity onPress={handleBack}>
                    {backIcon}
                </TouchableOpacity>
                <Text style={styles.headingText}>Inbox</Text>
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

            {/* Input field for message */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleMessageSend}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
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
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 10,
    },
    input: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical:10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
