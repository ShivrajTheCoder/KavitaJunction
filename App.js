// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from './components/Layout/Navbar';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <Navbar {...props} />}
        screenOptions={{ headerShown: false }} // Hide the header for all screens
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        {/* Add more screens here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
