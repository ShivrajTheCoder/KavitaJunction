import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backIcon = <Ionicons name="arrow-back" size={24} color="black" />;

// Sample data for channels
const channelsData = [
  { title: 'Speak English', channels: ['Channel 1', 'Channel 2', 'Channel 3', 'Channel 4'] },
  { title: 'Another Title', channels: ['Channel 5', 'Channel 6', 'Channel 7', 'Channel 8'] },
  { title: 'Another Title', channels: ['Channel 5', 'Channel 6', 'Channel 7', 'Channel 8'] },
  { title: 'Another Title', channels: ['Channel 5', 'Channel 6', 'Channel 7', 'Channel 8'] },
  // Add more titles and channels as needed
];

export default function AllChannels({ navigation }) {
    const handleBack = () => {
        navigation.goBack();    // Handle back button press
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.channelSectionsContainer} showsVerticalScrollIndicator={false}>
                {channelsData.map((section, index) => (
                    <View key={index} style={styles.channelSection}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {section.channels.map((channel, index) => (
                                <TouchableOpacity key={index} style={styles.channelCard}>
                                    <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                                    <View style={styles.channelInfo}>
                                        <Text style={styles.channelTitle}>{channel}</Text>
                                        <Text style={styles.coachName}>Coach Name</Text>
                                        <Text style={styles.date}>16 Mar 2024, 10:30 PM</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    backButton: {
        marginRight: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    channelSectionsContainer: {
        flex: 1,
        paddingVertical: 10,
    },
    channelSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    channelCard: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        marginBottom: 10,
    },
    image: {
        height: 100,
        width: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    channelInfo: {
        backgroundColor: 'orange',
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flex: 1,
    },
    channelTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    coachName: {
        color: 'white',
        fontSize: 13
    },
    date: {
        color: 'white',
        fontSize: 10
    },
});
