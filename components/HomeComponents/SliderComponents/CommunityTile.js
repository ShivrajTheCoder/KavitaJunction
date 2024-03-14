import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function CommunityTile() {
    // Placeholder initial (use "A" for now)
    const initial = "A";
    const name="Arts and Music"
    const members="1000"
    return (
        <View style={styles.container}>
            <View style={styles.initialContainer}>
                <Text style={styles.initial}>{initial}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.members}>{members} members</Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinText}>Join</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    initialContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    initial: {
        fontSize: 20,
        color: '#666',
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    members: {
        fontSize: 14,
        color: 'gray',
    },
    joinButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    joinText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});
