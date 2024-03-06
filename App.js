import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Navbar from './components/Layout/Navbar';
import Details from './screens/Details';
import Search from './screens/Search';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <Navbar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
          <Tab.Screen name="Details" component={Search}  options={{ title: 'Details' }} />
          <Tab.Screen name="Search" component={Details}  options={{ title: 'Details' }} />
          <Tab.Screen name="Orientaion" component={Details} options={{ title: 'Details' }} />
          <Tab.Screen name="Premium" component={Details} options={{ title: 'Details' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
