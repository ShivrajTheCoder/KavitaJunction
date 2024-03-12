import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const notification = <MaterialIcons name="notifications-none" size={30} color="black" />;
const message = <MaterialCommunityIcons name="message-flash-outline" size={27} color="black" />;
const coins = <FontAwesome5 name="coins" size={24} color="black" />;

export default function TopNav({heading}) {
    const userInitial = 'M'; // Assuming the user's first initial is 'M'
    const coinsCount = 100; // Assuming the user has 100 coins

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.userInitial}>
                    <Text style={styles.initialText}>{userInitial}</Text>
                </View>
                <View style={styles.coinsContainer}>
                    <Text style={styles.coinsCount}>{coinsCount}</Text>
                    {coins}
                </View>
                
            </View> 
            <Text style={styles.title}>{heading}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundcolor:"black",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userInitial: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#1c4966',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    initialText: {
        color:"white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    coinsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinsCount: {
        marginRight: 5,
        color:"black",
        fontSize: 16,
    },
    title: {
        color:"black",
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal:30
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacer: {
        width: 10, // Adjust as needed
    },
});
