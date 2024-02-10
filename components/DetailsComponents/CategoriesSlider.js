import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
data=[
    {
        name:"Podcast",
        id:1,
    },
    {
        name:"Bhajans",
        id:2,
    },
    {
        name:"Songs",
        id:3,
    },
    {
        name:"Books",
        id:4,
    },
    {
        name:"Stories",
        id:5,
    },
    {
        name:"Horror",
        id:6,
    },
]
export default function CategoriesSlider() {
  return (
    <ScrollView horizontal={true}>
        <View style={styles.container}>
            {
                data.map(item=>{
                    return (
                        <View key={item.id} style={styles.categoryTile}>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    )
                })
            }
        </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    container:{
      display:"flex",
      flexDirection:"row",
      marginHorizontal:10
    },
    categoryTile:{
        marginHorizontal:5,
        backgroundColor:"#6c757d",
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:10,
        marginVertical:10
    },
    name:{
        color:"white"
    }
  })