import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
const Navbar = ({ state, descriptors, navigation }) => {
  const iconRoutes = {
    home: "Home",
    search: "Details",
    subscribe: "Search",
    calendar: "Orientaion",
    user: "Premium",
  };

  const icons = [
    <SimpleLineIcons name="home" size={24} color="white" />,
    <FontAwesome name="search" size={24} color="white" />,
    <View style={styles.subscribeBtn} >
      <Text style={styles.subTxt} >Subscribe</Text>
    </View>,
    <Entypo name="calendar" size={24} color="white" />,
    <EvilIcons name="user" size={40} color="white" />,
  ];

  const handleIconPress = (index) => {
    // console.log(Object.keys(iconRoutes)[index]);
    const routeName = iconRoutes[Object.keys(iconRoutes)[index]];
    // console.log(routeName);
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleIconPress(index)}
          style={[styles.tabButton, state.index === index && styles.tabButtonFocused]}
        >
          {icon}
        </TouchableOpacity>
      ))}
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
  }
});

export default Navbar;
