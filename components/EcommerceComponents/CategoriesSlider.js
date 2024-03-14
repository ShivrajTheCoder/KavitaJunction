import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const tshirt = <FontAwesome6 name="shirt" size={24} color="black" />;
const basket = <FontAwesome5 name="shopping-basket" size={24} color="black" />;
const pencil = <Entypo name="pencil" size={24} color="black" />;
const books = <MaterialIcons name="library-books" size={24} color="black" />;
const wallet = <Entypo name="wallet" size={24} color="black" />;
const data = [
    {
        id: 1,
        icon: tshirt,
        name: "T shirts"
    },
    {
        id: 2,
        icon: basket,
        name: "Jute Basket"
    },
    {
        id: 3,
        icon: pencil,
        name: "Pencils"
    },
    {
        id: 4,
        icon: books,
        name: "Books"
    },
    {
        id: 5,
        icon: wallet,
        name: "Wallets"
    },
];

export default function CategoriesSlider() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map(category => (
                    <View key={category.id} style={styles.category}>
                        {category.icon}
                        <Text style={styles.categoryName}>{category.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    category: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    categoryName: {
        marginTop: 5,
    },
});
