import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import ThemeContext from '../../contexts/ThemeProvider';

const { width } = Dimensions.get('window');
const itemWidth = (width - 30) / 2; // Divide by 2 to fit 2 items per row with 10px margin on each side

const data = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Jute Basket",
        price: 500 // Price in rupees
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Men's Shirt",
        price: 799 // Price in rupees
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Pencil Set",
        price: 150 // Price in rupees
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Wall Clock",
        price: 899 // Price in rupees
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Basketball",
        price: 299 // Price in rupees
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Bracelet",
        price: 199 // Price in rupees
    }
];

export default function ProductsContainer({ home }) {
    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

    const iconColor = theme === 'dark' ? 'white' : 'black';
    const imageBackground = theme === 'dark' ? 'black' : 'transparent'; // Adjust image background based on theme

    const navigateDetails = () => {
        navigation.navigate("ProductDetails");
    }

    const noProd = home ? 4 : data.length;
    const renderedProducts = [];
    for (let i = 0; i < noProd; i += 2) {
        const firstProduct = data[i];
        const secondProduct = data[i + 1];

        renderedProducts.push(
            <View key={firstProduct.id} style={styles.productContainer}>
                <TouchableOpacity style={styles.product} onPress={navigateDetails}>
                    <Image source={{ uri: firstProduct.image }} style={[styles.image, { backgroundColor: imageBackground }]} />
                    <Text style={[styles.name, { color: iconColor }]}>{firstProduct.name}</Text>
                    <Text style={[styles.price, { color: iconColor }]}>₹{firstProduct.price}</Text>
                </TouchableOpacity>
                {secondProduct && ( // Check if second product exists
                    <TouchableOpacity style={styles.product} onPress={navigateDetails}>
                        <Image source={{ uri: secondProduct.image }} style={[styles.image, { backgroundColor: imageBackground }]} />
                        <Text style={[styles.name, { color: iconColor }]}>{secondProduct.name}</Text>
                        <Text style={[styles.price, { color: iconColor }]}>₹{secondProduct.price}</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <Text style={[styles.title, { color: iconColor }]}>Category Name</Text>
            {renderedProducts}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    product: {
        width: itemWidth,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    name: {
        marginTop: 5,
        textAlign: 'center',
    },
    price: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
    },
    title: {
        color: 'black',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
});
