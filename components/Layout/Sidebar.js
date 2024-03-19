import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from '../../contexts/ThemeProvider';

export default function Sidebar({ open, onClose }) {
    if (!open) return null;
    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext); // Accessing theme from the context

    const handleContentPress = () => {
        // Handle content specific actions here (e.g., navigation)
    };

    // Determine icon colors based on the theme
    const iconColor = theme === 'dark' ? 'white' : 'black';
    const backgroundColor = theme === 'dark' ? '#1c4966' : 'black';

    return (
        <TouchableOpacity style={styles.container} onPress={onClose}>
            <View style={[styles.sidebarContent, { backgroundColor }]}>
                {/* Close Icon */}
                <View style={styles.closeIconContainer}>
                    <AntDesign name="close" size={24} color={iconColor} />
                </View>

                {/* Profile */}
                <View style={[styles.initialCont, { backgroundColor: theme === 'dark' ? '#1e1e1e' : 'white' }]} >
                    <Text style={{ color: 'white' }}>M</Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'black',
                        padding: 10,
                        margin: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}
                    onPress={handleContentPress}>
                    <Text style={{ color: 'white' }}>View Profile</Text>
                </TouchableOpacity>

                {/* Sidebar Content */}
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => navigation.navigate('Refer')}>
                    <Text style={styles.link}>Refer and Win</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => navigation.navigate('Creator')}>
                    <Text style={styles.link}>Creator Studio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.linkContainer2}
                    onPress={() => navigation.navigate('Orientaion')}>
                    <Text style={styles.link}>My Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.linkContainer2}
                    onPress={handleContentPress}>
                    <Text style={styles.link}>Buy Subscription</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={handleContentPress}>
                    <Text style={styles.link}>Follow Us</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => navigation.navigate('Setting')}>
                    <Text style={styles.link}>Account Setting</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => navigation.navigate('Store')}>
                    <Text style={styles.link}>Haat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => navigation.navigate('T&C')}>
                    <Text style={styles.link}>Terms and Conditions</Text>
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        zIndex: 999, // Ensure sidebar is above other content
    },
    sidebarContent: {
        width: '80%', // Adjust as needed
        height: '100%', // Take up the full height of the screen
        paddingTop: 50, // Adjust as needed
    },
    link: {
        fontSize: 13,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'white', // Text color
    },
    linkContainer: {
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        paddingTop: 10,
        borderColor: '#dee2e6',
    },
    linkContainer2: {
        paddingHorizontal: 10,
        backgroundColor: '#d4a373',
        borderBottomWidth: 1,
        paddingTop: 10,
        borderColor: '#dee2e6',
    },
    walletCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#dee2e6',
    },
    closeIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    initialCont: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#1c4966',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});
