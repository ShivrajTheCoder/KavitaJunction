import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const Navbar = ({ state, descriptors, navigation, iconImages }) => {
  const icons = iconImages || [
    "https://res.cloudinary.com/dushmacr8/image/upload/v1707584254/kj%20images/icons/home_qrfe6s.png",
    "https://res.cloudinary.com/dushmacr8/image/upload/v1707584254/kj%20images/icons/search_pl8fq9.png",
    "https://res.cloudinary.com/dushmacr8/image/upload/v1707584254/kj%20images/icons/orientation_s1b0nj.png",
    "https://res.cloudinary.com/dushmacr8/image/upload/v1707584254/kj%20images/icons/download_upejtx.png",
    "https://res.cloudinary.com/dushmacr8/image/upload/v1707584254/kj%20images/icons/premium_y8mrxg.png",
  ];

  return (
    <View style={styles.container}>
      {state.routes.slice(0, 5).map((route, index) => { // Only iterate over the first 5 routes
        const { options } = descriptors[route.key];
        const label = options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (index === 0) {
            navigation.navigate("Home");
          } else {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.tabButtonFocused]}
          >
            <Image source={{ uri: icons[index] }} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#22577a',
    paddingVertical: 10,
    width: Dimensions.get('window').width, 
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabButtonFocused: {
    backgroundColor: '#1c4966',
  },
  icon: {
    width: 24, 
    height: 24, 
  },
});

export default Navbar;
