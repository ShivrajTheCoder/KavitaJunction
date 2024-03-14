import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import LiveContainer from '../components/HomeComponents/LiveContainer';

export default function Coaches() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Connect with our coaches </Text>
            <View style={styles.coachContainer}>
                <View style={styles.coachInfo}>
                    <Image
                        source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }}
                        style={styles.coachImage}
                    />
                    <Text style={styles.coachName}>Name</Text>
                </View>
                <LiveContainer live={false} />
            </View>
            <View style={styles.coachContainer}>
                <View style={styles.coachInfo}>
                    <Image
                        source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png" }}
                        style={styles.coachImage}
                    />
                    <Text style={styles.coachName}>Name</Text>
                </View>
                <LiveContainer live={false} />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingVertical: 20,
        flex: 1,
    },
    coachContainer: {
        
    },
    coachInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,

        // backgroundColor:"white"
    },
    coachImage: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    coachName: {
        color:"black",
        fontSize: 18,
        fontWeight: 'bold',
    },
    heading: {
        color: "black",
        fontSize: 17,
        fontWeight: "bold",
        margin: 10
    }
});
