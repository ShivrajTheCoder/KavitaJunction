import React from 'react'
import { Image, StyleSheet, View, ScrollView, Text } from 'react-native'
const data = [
    {
        name: "Anuj",
        id: 1,
    },
    {
        name: "Shivraj",
        id: 2,
    },
    {
        name: "Riya",
        id: 3
    }
]
export default function ProfileContainer() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Profiles</Text>
            <ScrollView horizontal={true} >

                {
                    data.map(profile => {
                        return (
                            <View key={profile.id} style={styles.profile}>
                                <Image style={styles.pic} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-5_vhawaz.jpg" }} />
                                <Text style={styles.name}>{profile.name}</Text>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#022b3a",
        // height:"100%",

        margin: 10
    },
    pic: {
        height: 70,
        width: 70,
        borderRadius: 50
    },
    profile: {
        marginHorizontal: 7,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    heading:{
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        marginVertical:5
    },
    name:{
        color:"white"
    }
})