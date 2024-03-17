import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backIcon = <Ionicons name="arrow-back" size={24} color="black" />;

export default function CreatorStudio({ navigation }) {
    const [channelName, setChannelName] = useState('');
    const [showContentForm, setShowContentForm] = useState(false);

    const handleBack = () => {
        navigation.goBack();
    };

    const handleCreateChannel = () => {
        // Logic to create channel
        setShowContentForm(true);
    };

    const handleChooseFile = () => {
        // Logic to choose file
    };

    const handleUploadFile = () => {
        // Logic to upload file
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <View style={styles.headingContainer}>
                <TouchableOpacity onPress={handleBack}>
                    {backIcon}
                </TouchableOpacity>
                <Text style={styles.headingText}>Creator Studio</Text>
            </View>

            {/* Create Channel Form */}
            {!showContentForm && (
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Channel Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={channelName}
                        onChangeText={text => setChannelName(text)}
                        placeholder="Enter channel name"
                    />
                </View>
            )}

            {/* Content Upload Form */}
            {showContentForm && (
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Choose File:</Text>
                    <TouchableOpacity style={styles.fileButton} onPress={handleChooseFile}>
                        <Text style={styles.fileButtonText}>Choose File</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uploadButton} onPress={handleUploadFile}>
                        <Text style={styles.uploadButtonText}>Upload File</Text>
                    </TouchableOpacity>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 50,
    },
    formContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
    },
    fileButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    fileButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    uploadButton: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    uploadButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    createButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    createButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
