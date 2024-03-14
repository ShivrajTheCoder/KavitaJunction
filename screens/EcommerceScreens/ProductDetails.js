import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const backIcon = <Ionicons name="arrow-back" size={24} color="black" />;

const star = <AntDesign name="star" size={24} color="#FFD700" />;
const halfStar = <FontAwesome name="star-half" size={24} color="#FFD700" />;
const emptyStar = <AntDesign name="staro" size={24} color="black" />; // Empty star icon

export default function ProductDetails() {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.navigate("Store");
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(star);
        }

        if (hasHalfStar) {
            stars.push(halfStar);
        }

        while (stars.length < 5) {
            stars.push(emptyStar);
        }

        return (
            <View style={styles.starContainer}>
                {stars.map((icon, index) => (
                    <View key={index}>{icon}</View>
                ))}
            </View>
        );
    };

    const product = {
        id: 6,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Bracelet",
        price: 199,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni inventore beatae placeat magnam atque sint vero aperiam iure, ducimus, odio quas ipsa enim rem. Quia minima vel dolore nihil fugit?",
        review: 4.5
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.headingContainer}>
                    <TouchableOpacity onPress={handleBack}>
                        {backIcon}
                    </TouchableOpacity>
                    <Text style={styles.headingText}>Product Details</Text>
                </View>
                <View style={styles.productContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: product.image }} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{product.name}</Text>
                        <Text style={styles.price}>₹{product.price}</Text>
                        <View style={styles.reviewContainer}>
                            {renderStars(product.review)}
                            <Text style={{color:"#e5e5e5", marginHorizontal:10}}  >(23)</Text>
                        </View>
                        <Text style={styles.description}>{product.about}</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Order Item</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Set background color to white
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 100, // Adjust according to button height
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 10,
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    productContainer: {
        flexDirection: 'column',
        padding: 20,
    },
    imageContainer: {
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
    },
    description: {
        marginBottom: 10,
        textAlign: 'left',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'left',
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    reviewText: {
        marginRight: 10,
    },
    starContainer: {
        flexDirection: 'row',
    },
    orderButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    orderButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});
