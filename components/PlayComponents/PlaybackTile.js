import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function PlaybackTile() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575265/kj%20images/cover_2_bgvidc.jpg"
                }}
            />
            <View  style={styles.control}>
                <Text style={styles.contorlBtn}>+</Text>
                <View style={styles.controlCont}>
                    <Image
                        style={styles.playbtn}
                        source={{
                            uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1707581213/kj%20images/icons/play_pal4kz.png"
                        }}
                    />
                    <Text style={styles.playTxt}>Play Now</Text>
                </View>
                <Text style={styles.contorlBtn}>+</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    image: {
        height: 490,
        width: "full"
    },
    control:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20
    },
    contorlBtn:{
        color:"black",
        backgroundColor:"white",
        paddingHorizontal:15,
        paddingVertical:5,
        fontSize:15,
        fontWeight:"700",
        borderRadius:5
    },
    controlCont: {
        width:200,
        borderRadius:5,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 5,
        marginVertical: 10,
    },
    playbtn: {
        height: 30,
        width: 30
    },
    playTxt:{
        color:"black",
        fontSize:15,
        fontWeight:"700",
        marginHorizontal:10
    }
});
