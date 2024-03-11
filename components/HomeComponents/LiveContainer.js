import React from 'react'
import { Text, ScrollView, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native'

export default function LiveContainer({ live = true }) {
    return (
        <View style={styles.container}>
            {
                live &&
                <Text style={styles.text}>Live Now</Text>
            }
            {
                !live &&
                <Text style={styles.text}>Mentor Courses</Text>
            }
            <ScrollView horizontal={true} style={styles.tileScroll}>
                <View style={styles.tileCont} >
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                        <View style={styles.details}>
                            <Text style={styles.name}>Satish Thakral</Text>
                            <Text style={styles.name}>Course Name</Text>
                        </View>
                    </View>
                    <Text style={styles.heading}>Heading of the video</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Listen Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tileCont} >
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                        <View style={styles.details}>
                            <Text style={styles.name}>Satish Thakral</Text>
                            <Text style={styles.name}>Course Name</Text>
                        </View>
                    </View>
                    <Text style={styles.heading}>Heading of the video</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Listen Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#022b3a",
        padding: 10,
    },
    text: {
        color: "white",
        fontSize: 15,
        // fontWeight:900
    },
    tileScroll: {
        marginTop: 10,
        marginBottom: 10,
    },
    tileCont: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 10,
        backgroundColor: "#0077b6",
        borderRadius: 10,
    },
    image: {
        height: 70,
        width: 150,
        borderTopLeftRadius: 10
    },
    liveInfo: {
        display: "flex",
        flexDirection: "row",
        paddingRight: 10,

    },
    details: {
        marginLeft: 10,
        height: "full",
        width: "full",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        color: "white",
        fontSize: 12,

    },
    button: {
        backgroundColor: '#FF8C00',
        paddingVertical: 10,
        paddingHorizontal: 20,

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    heading: {
        color: "white",
        fontSize: 15,
        fontWeight: "500",
        marginVertical: 2,
        marginHorizontal: 4
    }
})
