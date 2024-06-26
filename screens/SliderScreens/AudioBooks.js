import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';

export default function AudioBooks() {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const [audiobooks, setAudioBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAudioBooks = async () => {
            try {
                const response = await axios.get(`${apiUrl}/audioBooks/getAllAudioBooks`);
                if (response.status === 200) {
                    console.log(response.data.audios);
                    setAudioBooks(response.data.audios);
                } else {
                    console.error('Failed to fetch audiobooks:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching audiobooks:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAudioBooks();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error || audiobooks.length === 0) {
        return <Text>No audio books found.</Text>;
    }

    return (
        <ScrollView>
            {audiobooks.map(audiobook => (
                <View key={audiobook.id} style={styles.container}>
                    <Image source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575265/kj%20images/cover_2_bgvidc.jpg" }} style={styles.cover} />
                    <View style={styles.details}>
                        <Text style={styles.title}>{audiobook.title}</Text>
                        <Text style={styles.description}>{audiobook.description}</Text>
                        <Text style={styles.date}>{audiobook.created_at}</Text>
                        {/* Add more audiobook details as needed */}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cover: {
        width: 175,
        height: 150,
        marginRight: 10,
        borderRadius:10
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        marginBottom: 5,
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
});
