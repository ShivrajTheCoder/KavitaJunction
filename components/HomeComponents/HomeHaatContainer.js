import React from 'react';
import BannerSlider from '../EcommerceComponents/BannerSlider';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoriesSlider from '../EcommerceComponents/CategoriesSlider';
import ProductsContainer from '../EcommerceComponents/ProductsContiner';
const backIcon = <Ionicons name="arrow-back" size={24} color="black" />;

export default function HomeHaatContainer({ navigation }) {
    
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                {/* <TouchableOpacity onPress={handleBack}>
                    {backIcon}
                </TouchableOpacity> */}
                <Text style={styles.headingText}>Kaho G Haat</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                {/* <BannerSlider /> */}
                <CategoriesSlider home={true} />
                <ProductsContainer home={true} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 20,
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});