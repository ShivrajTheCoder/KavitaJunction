import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const down = <AntDesign name="down" size={24} color="white" />;
const up = <AntDesign name="up" size={24} color="white" />;
export default function CategoryCard({ data }) {
    const [showSub, setShowSub] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.categoryHeader}>
                <Text style={styles.categoryHeaderText}>{data.name}</Text>
                {
                    showSub ? <TouchableOpacity onPress={() => setShowSub(!showSub)} >
                        {up}
                    </TouchableOpacity> : <TouchableOpacity onPress={() => setShowSub(!showSub)} >
                        {down}
                    </TouchableOpacity>
                }
            </View>
            <ScrollView horizontal>
                {
                    showSub && <View style={styles.subcategoryContainer}>
                        {data.subcategories.map((sub) => (
                            <TouchableOpacity key={sub} style={styles.subcategory}>
                                <Text style={styles.subcategoryText}>{sub}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                }
            </ScrollView >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1f7a8c',
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        marginHorizontal: 10,
    },
    name: {
        color: "white"
    },
    categoryHeader: {

        flexDirection: 'row',
        justifyContent: "space-between"
    },
    categoryHeaderText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white'
    },
    subcategoryContainer: {
        flexDirection:"row"
    },
    subcategory: {
        paddingVertical: 5,
        backgroundColor:"#bfdbf7",
        paddingHorizontal:20,
        paddingVertical:30,
        margin:10,
        borderRadius:15
    },
    subcategoryText: {
        fontSize: 16,
    },
});
