import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Modal, Button } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Navbar = ({ state, descriptors, navigation }) => {
  const icons = [
    <SimpleLineIcons name="home" size={24} color="white" />,
    <FontAwesome name="search" size={24} color="white" />,
    <View style={styles.subscribeBtn} >
      <Text style={styles.subTxt} >Subscribe</Text>
    </View>,
    <Entypo name="calendar" size={24} color="white" />,
    <EvilIcons name="user" size={40} color="white" />,
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            if (index === 2) {
              toggleModal();
            }
          }}
          style={[styles.tabButton, state.index === index && styles.tabButtonFocused]}
        >
          {icon}
        </TouchableOpacity>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Subscription Popup Content</Text>
            <Button title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#22577a',
    width: Dimensions.get('window').width,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabButtonFocused: {
  },
  subscribeBtn:{
    backgroundColor:"black",
    borderRadius:30,
    width:120,
    height:50,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:5
  },
  subTxt:{
    color:"white",
    fontWeight:"bold"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Navbar;
