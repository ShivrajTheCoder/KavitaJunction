import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ThemeContext from '../../contexts/ThemeProvider';


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
    <SimpleLineIcons name="home" size={30} />,
    <FontAwesome name="search" size={30} />,
    <Entypo name="squared-plus" size={30} />,
    <Entypo name="calendar" size={30} />,
    <FontAwesome5 name="kickstarter-k" size={30} />
  ];

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#1e1e1e' : 'white' }]}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate(iconRoutes[Object.keys(iconRoutes)[index]]);
          }}
          style={[styles.tabButton, state.index === index && styles.tabButtonFocused]}
        >
          {React.cloneElement(icon, {
            color: theme === 'dark' ? 'white' : 'black'
          })}
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
    width: Dimensions.get('window').width,
    paddingVertical:7
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
