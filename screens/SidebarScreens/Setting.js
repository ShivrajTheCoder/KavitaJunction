import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../../contexts/ThemeProvider';

const backIcon = <Ionicons name="arrow-back" size={24} color="black" />;

export default function Setting({ navigation }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleBack = () => {
        navigation.goBack();    // Handle back button press
    };

    return (
        <View style={styles.container}>
            {/* Heading */}
            <View style={styles.headingContainer}>
                <TouchableOpacity onPress={handleBack}>
                    {backIcon}
                </TouchableOpacity>
                <Text style={styles.headingText}>Settings</Text>
            </View>

            {/* Content */}
            <ScrollView style={styles.content}>
                {/* Toggle Theme */}
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Dark Mode</Text>
                    <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
                </View>

                {/* Other Options */}
                <View style={styles.optionContainer}>
                    <View>
                        <Text style={styles.optionText}>Add To Calendar Reminder</Text>
                        <Text style={{ color: "gray", fontSize: 12 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </View>
                    <Switch />
                </View>
                <View style={styles.optionContainer}>
                    <View>
                        <Text style={styles.optionText}>Add Invite Code</Text>
                        <Text style={{ color: "gray", fontSize: 12 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </View>
                    {/* <Switch /> */}
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Add Phone</Text>
                </View>
            </ScrollView>

            {/* Delete Account */}
            <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete My Account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    content: {
        flex: 1,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 15,
    },
    optionText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
