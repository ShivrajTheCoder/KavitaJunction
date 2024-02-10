import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
const data = [
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575265/kj%20images/cover_2_bgvidc.jpg",
        id: 1,
        size: 93,
        episodes: 1,
        name:"Kavita Ek Vishwaas"
    },
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575265/kj%20images/cover_2_bgvidc.jpg",
        id: 2,
        size: 30,
        episodes: 3,
        name:"Kavita Ek Vishwaas"
    },
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575265/kj%20images/cover_2_bgvidc.jpg",
        id: 3,
        size: 25,
        episodes: 5,
        name:"Kavita Ek Vishwaas"
    },
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575265/kj%20images/cover_2_bgvidc.jpg",
        id: 4,
        size: 100,
        episodes: 2,
        name:"Kavita Ek Vishwaas"
    },
]
export default function QuickPlayContainer() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Continue Playing For Anuj</Text>
            {/* <ScrollView> */}
                <View>
                    {
                        data.map(item => {
                            return (
                                <View key={item.id} style={styles.card}>
                                    <Image style={styles.cover} source={{ uri: `${item.image}` }} />
                                    <View style={styles.details}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <View style={styles.character}>
                                            <Text style={styles.episodes}>{item.episodes} Episodes</Text>
                                            <Text style={styles.episodes}>{item.size} MB</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            {/* </ScrollView> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#022b3a",
        height: "auto",
        paddingHorizontal: 10,
        marginVertical:10,
        height:"auto"
    },
    heading: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 5,
        // paddingBottom:10
    },
    cover: {
        height: 120,
        width: 150
    },
    card:{
        margin:10,
        display:"flex",
        flexDirection:"row"
    },
    character:{
        display:"flex",
        flexDirection:"row"
    },
    episodes:{
        color:"white",
        fontSize:13,
        fontWeight:"300",
        marginHorizontal:10
    },
    name:{
        color:"white",
        fontSize:15,
        fontWeight:"600",
        marginHorizontal:10
    }
})