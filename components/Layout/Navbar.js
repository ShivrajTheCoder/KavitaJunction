import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const closeIcon = <AntDesign name="close" size={24} color="black" />;

const Navbar = ({ state, descriptors, navigation }) => {
  const iconRoutes = {
    home: "Home",
    search: "Details",
    subscribe: "Creator",
    calendar: "Premium",
    user: "About",
  };

  const icons = [
    <SimpleLineIcons name="home" size={24} color="black" />,
    <FontAwesome name="search" size={24} color="black" />,
    <Entypo name="squared-plus" size={24} color="black" />,
    <Entypo name="calendar" size={24} color="black" />,
    <FontAwesome5 name="kickstarter-k" size={24} color="black" />
  ];

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate(iconRoutes[Object.keys(iconRoutes)[index]]);
          }}
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
  }
});

export default Navbar;
