import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function UserInfo() {
    return (
        <View style={styles.container}>
            <View style={styles.topBar} >
                <Image style={styles.image} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1710155799/kj%20images/kahojilogo-modified_ft0kex.png" }} />
                <View style={styles.settingCont}>
                    <Text style={styles.helpText}>Help and Setting</Text>
                    <Image style={styles.setting} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1707584254/kj%20images/icons/setting_jldl5b.png" }} />
                </View>
            </View>
            <View >
                <Text style={styles.userInfo}>Anuj Kumar Sharma</Text>
                <Text style={styles.userInfo}>+91 8********3</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:10
    },
    image: {
        height: 80,
        width: 80,
        margin:10
    },
    setting: {
        height: 30,
        width: 30
    },
    topBar: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    helpText:{
        color:"white",
        marginHorizontal:10,
        fontWeight:"bold",
        fontSize:15
    },
    settingCont:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        marginRight:10
    },
    userInfo:{
        color:"white",
        fontWeight:"bold",
        fontSize:15
    }
})