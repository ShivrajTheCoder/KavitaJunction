import React, { useContext } from 'react';
import { Text, ScrollView, StyleSheet, View, Image, Button } from 'react-native';
import ThemeContext from '../contexts/ThemeProvider';

export default function MyCourses() {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <Text style={[styles.text, { color: theme === 'dark' ? 'white' : 'black' }]}>My Courses</Text>
            <ScrollView style={styles.tileScroll}>
                <View style={styles.tileCont} >
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                        <View style={styles.details}>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Satish Thakral</Text>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Course Name</Text>
                        </View>
                    </View>
                    <Text style={[styles.heading, { color: theme === 'dark' ? 'white' : 'black' }]}>Heading of the video</Text>
                    <Button title="Listen Now" style={styles.button}
                        color="#FF8C00" // Orange color
                        titleColor="#000000" />
                </View>
                <View style={styles.tileCont} >
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                        <View style={styles.details}>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Satish Thakral</Text>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Course Name</Text>
                        </View>
                    </View>
                    <Text style={[styles.heading, { color: theme === 'dark' ? 'white' : 'black' }]}>Heading of the video</Text>
                    <Button title="Listen Now" style={styles.button}
                        color="#FF8C00" // Orange color
                        titleColor="#000000" />
                </View>
                <View style={styles.tileCont} >
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                        <View style={styles.details}>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Satish Thakral</Text>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Course Name</Text>
                        </View>
                    </View>
                    <Text style={[styles.heading, { color: theme === 'dark' ? 'white' : 'black' }]}>Heading of the video</Text>
                    <Button title="Listen Now" style={styles.button}
                        color="#FF8C00" // Orange color
                        titleColor="#000000" />
                </View>
                <View style={styles.tileCont} >
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                        <View style={styles.details}>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Satish Thakral</Text>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Course Name</Text>
                        </View>
                    </View>
                    <Text style={[styles.heading, { color: theme === 'dark' ? 'white' : 'black' }]}>Heading of the video</Text>
                    <Button title="Listen Now" style={styles.button}
                        color="#FF8C00" // Orange color
                        titleColor="#000000" />
                </View>
                <View style={styles.tileCont} >
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                        <View style={styles.details}>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Satish Thakral</Text>
                            <Text style={[styles.name, { color: theme === 'dark' ? 'white' : 'black' }]}>Course Name</Text>
                        </View>
                    </View>
                    <Text style={[styles.heading, { color: theme === 'dark' ? 'white' : 'black' }]}>Heading of the video</Text>
                    <Button title="Listen Now" style={styles.button}
                        color="#FF8C00" // Orange color
                        titleColor="#000000" />
                </View>
                {/* Add more course tiles here */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: "900",
        marginHorizontal: 10
    },
    tileScroll: {
        marginTop: 10,
        marginBottom: 10,
    },
    tileCont: {
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#0077b6",
        borderRadius: 5,
    },
    image: {
        height: 70,
        width: 150
    },
    liveInfo: {
        display: "flex",
        flexDirection: "row",
        paddingRight: 10
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
        fontSize: 12,
    },
    button: {
        height: 50,
        width: "full",

    },
    heading: {
        fontSize: 15,
        fontWeight: "500",
        marginVertical: 2,
        marginHorizontal: 4
    }
})
