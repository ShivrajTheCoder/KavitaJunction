import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../contexts/ThemeProvider';

export default function Notifications({ navigation }) {
    const { theme } = useContext(ThemeContext);

    const handleBack = () => {
        navigation.goBack();    // Handle back button press
    };

    const containerStyle = {
        backgroundColor: theme === 'dark' ? '#1e1e1e' : 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
    };

    const headingTextStyle = {
        color: theme === 'dark' ? 'white' : 'black',
    };

    const dateTextStyle = {
        color: theme === 'dark' ? 'white' : 'black',
    };

    const dateContainerStyle = {
        backgroundColor: theme === 'dark' ? '#383838' : '#f0f0f0',
    };

    const notificationItemStyle = {
        backgroundColor: theme === 'dark' ? '#282828' : '#f9f9f9',
    };

    const notificationTextStyle = {
        color: theme === 'dark' ? 'white' : 'black',
    };

    const backButtonColor = theme === 'dark' ? 'white' : 'black';

    return (
        <ScrollView style={[styles.container, containerStyle]}>
            {/* Heading */}
            <View style={styles.headingContainer}>
                <TouchableOpacity onPress={handleBack}>
                    <Ionicons name="arrow-back" size={24} color={backButtonColor} />
                </TouchableOpacity>
                <Text style={[styles.headingText, headingTextStyle]}>Notifications</Text>
            </View>

            {/* Notification Content */}
            <View style={styles.notificationContainer}>
                {/* Date of Notification */}
                <View style={[styles.dateContainer, dateContainerStyle]}>
                    <Text style={[styles.dateText, dateTextStyle]}>March 13, 2024</Text>
                </View>

                {/* Notifications */}
                <View style={[styles.notificationItem, notificationItemStyle]}>
                    <View style={styles.profile} >
                        <Text style={{ color: 'white' }}>M</Text>
                    </View>
                    <Text style={[styles.notificationText, notificationTextStyle]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam minus aspernatur</Text>
                </View>
                {/* Add more notifications as needed */}
                <View style={[styles.notificationItem, notificationItemStyle]}>
                    <View style={styles.profile} >
                        <Text style={{ color: 'white' }}>M</Text>
                    </View>
                    <Text style={[styles.notificationText, notificationTextStyle]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam minus aspernatur</Text>
                </View>
                <View style={[styles.notificationItem, notificationItemStyle]}>
                    <View style={styles.profile} >
                        <Text style={{ color: 'white' }}>M</Text>
                    </View>
                    <Text style={[styles.notificationText, notificationTextStyle]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam minus aspernatur</Text>
                </View>
                <View style={[styles.notificationItem, notificationItemStyle]}>
                    <View style={styles.profile} >
                        <Text style={{ color: 'white' }}>M</Text>
                    </View>
                    <Text style={[styles.notificationText, notificationTextStyle]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam minus aspernatur</Text>
                </View>
            </View>
            {/* Add more dates and notifications as needed */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    dateText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    notificationItem: {
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
