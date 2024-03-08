import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Navbar from './components/Layout/Navbar';
import Details from './screens/Details';
import Search from './screens/Search';
import Play from './screens/Play';
import Mentor from './screens/Mentor';
import Coaches from './screens/Coaches';
import MyCourses from './screens/MyCourses';

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
          <Tab.Screen name="Search" component={Details}  options={{ title: 'Search' }} />
          <Tab.Screen name="Orientaion" component={Play} options={{ title: 'Play' }} />
          <Tab.Screen name="Premium" component={Details} options={{ title: 'Pro' }} />
          <Tab.Screen name="Mentor" component={Mentor} options={{ title: 'Mentor' }} />
          <Tab.Screen name="MyCourses" component={MyCourses} options={{ title: 'MyCourses' }} />
          <Tab.Screen name="Coaches" component={Coaches} options={{ title: 'Coaches' }} />
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
