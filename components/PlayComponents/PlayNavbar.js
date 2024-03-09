import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function PlayNavbar() {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709972737/kj%20images/kahojiicon_rzxrty.png"
                    }}
                />
                <View style={styles.inputContainer}>
                <Text style={styles.topText}>Upcoming</Text>
                <Text style={styles.topText}>Coming Soon</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    image: {
        height: 100,
        width: 100
    },
    setting: {
        height: 30,
        width: 30,
        marginHorizontal:10
    },
    topBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flex: 1 ,
        borderRadius: 5,
    },
    topText: {
        marginHorizontal:5,
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        textDecorationLine:"underline"
    }
});
