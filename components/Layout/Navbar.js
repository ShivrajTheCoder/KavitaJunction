import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Modal, Button, ScrollView } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const closeIcon = <AntDesign name="close" size={24} color="black" />;

const Navbar = ({ state, descriptors, navigation }) => {
  const iconRoutes = {
    home: "Home",
    search: "Details",
    subscribe: "Search",
    calendar: "Premium",
    user: "About",
  };

  const icons = [
    <SimpleLineIcons name="home" size={24} color="black" />,
    <FontAwesome name="search" size={24} color="black" />,
    <View style={styles.subscribeBtn} >
      <Text style={styles.subTxt} >Subscribe</Text>
    </View>,
    <Entypo name="calendar" size={24} color="black" />,
    <FontAwesome5 name="kickstarter-k" size={24} color="black" />
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
            } else {
              navigation.navigate(iconRoutes[Object.keys(iconRoutes)[index]]);
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
            <View style={styles.headingCont}>
              {/* <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(!modalVisible)}>
                {closeIcon}
              </TouchableOpacity> */}
              <Text style={styles.modalHeading}>You have a growth mindset</Text>
            </View>
            {/* <Text style={styles.modalText}>You have unlocked a coupon</Text> */}
            <Text style={styles.modalText}>VALID ONLY FOR TODAY</Text>

            <TouchableOpacity style={styles.whatsappButton}>
              <Text style={styles.whatsappButtonText}>Whatsapp us within 7 days for a 100% refund</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, padding: 10, borderWidth: 1, borderRadius: 10, borderColor: "white", marginVertical: 10 }} >
                <View>
                  <Text style={{ color: "white", textDecorationLine: "line-through" }} >₹ 100.00</Text>
                  <Text style={{ color: "white" }}>₹ 200.00</Text>
                </View>
                <Text style={{ color: "white" }}>12 months</Text>
              </View>
              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, padding: 10, borderWidth: 1, borderRadius: 10, borderColor: "white", marginVertical: 10, marginHorizontal: 10 }} >
                <View>
                  <Text style={{ color: "white", textDecorationLine: "line-through" }} >₹ 100.00</Text>
                  <Text style={{ color: "white" }}>₹ 200.00</Text>
                </View>
                <Text style={{ color: "white" }}>12 months</Text>
              </View>
              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, padding: 10, borderWidth: 1, borderRadius: 10, borderColor: "white", marginVertical: 10 }} >
                <View>
                  <Text style={{ color: "white", textDecorationLine: "line-through" }} >₹ 100.00</Text>
                  <Text style={{ color: "white" }}>₹ 200.00</Text>
                </View>
                <Text style={{ color: "white" }}>12 months</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.paymentButton}>
              <Text style={styles.paymentButtonText}>Payment Options</Text>
            </TouchableOpacity>
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
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabButtonFocused: {
    // Add styles for focused tab if needed
  },
  subscribeBtn: {
    backgroundColor: "black",
    borderRadius: 30,
    width: 120,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  subTxt: {
    color: "white",
    fontWeight: "bold"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#000', // Black background color
    // padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeading: {
    color: 'black', // Golden text color
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalText: {
    color: '#fca311', // Golden text color
    // marginBottom: 10,
    marginVertical: 40
  },
  whatsappButton: {
    backgroundColor: '#fca311', // Golden background color
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  whatsappButtonText: {
    color: '#000', // Black text color
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: '#fca311', // Golden background color
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    paddingHorizontal: 20
  },
  paymentButtonText: {
    color: '#000', // Black text color
    fontWeight: 'bold',
  },
  headingCont: {
    width: 385,
    backgroundColor: "#fca311",
    paddingVertical: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  }
});

export default Navbar;
