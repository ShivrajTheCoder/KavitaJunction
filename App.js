import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Navbar from './components/Layout/Navbar';
import Play from './screens/Play';
import Mentor from './screens/Mentor';
import Coaches from './screens/Coaches';
import MyCourses from './screens/MyCourses';
import Following from './screens/Follwoing';
import Premium from './screens/Premium';
import Referandwin from './screens/SidebarScreens/Referandwin';
import TandC from './screens/SidebarScreens/TandC';
import CreatorStudio from './screens/SidebarScreens/CreatorStudio';
import Notifications from './screens/Notifications';
import Inbox from './screens/Inbox';
import Setting from './screens/SidebarScreens/Setting';
import Wallet from './screens/SidebarScreens/Wallet';
import StoreScreen from './screens/EcommerceScreens/StoreScreen';
import ProductDetails from './screens/EcommerceScreens/ProductDetails';
import AboutUs from './screens/AboutUs';
import { ThemeProvider } from './contexts/ThemeProvider';
import Details from './screens/Details';
import Search from './screens/Search';
import VideoPlayingScreen from './screens/PlayingScreens/VideoPlayingScreen';
import AudioPlayingScreen from './screens/PlayingScreens/AudioPlayingScreen';
import Events from './screens/OriginalsScreen/Events';
import Pathshala from './screens/OriginalsScreen/Pathshala';
import Karyashala from './screens/OriginalsScreen/Karyashala';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <Navbar {...props} />}
            screenOptions={{ headerShown: false }}
          >
            <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
            <Tab.Screen name="About" component={AboutUs} options={{ title: 'About Us' }} />
            <Tab.Screen name="Details" component={Search} options={{ title: 'Details' }} />
            <Tab.Screen name="Search" component={Details } options={{ title: 'Search' }} />
            <Tab.Screen name="Orientaion" component={Play} options={{ title: 'Play' }} />
            <Tab.Screen name="Premium" component={Premium} options={{ title: 'Pro' }} />
            <Tab.Screen name="Mentor" component={Mentor} options={{ title: 'Mentor' }} />
            <Tab.Screen name="MyCourses" component={MyCourses} options={{ title: 'MyCourses' }} />
            <Tab.Screen name="Following" component={Following} options={{ title: 'Following' }} />
            <Tab.Screen name="Coaches" component={Coaches} options={{ title: 'Coaches' }} />
            <Tab.Screen name="Refer" component={Referandwin} options={{ title: 'Refer And Win' }} />
            <Tab.Screen name="T&C" component={TandC} options={{ title: 'Terms And Conditions' }} />
            <Tab.Screen name="Creator" component={CreatorStudio} options={{ title: 'Creator Studio' }} />
            <Tab.Screen name="Notifications" component={Notifications} options={{ title: 'Notifications' }} />
            <Tab.Screen name="Inbox" component={Inbox} options={{ title: 'Inbox' }} />
            <Tab.Screen name="Setting" component={Setting} options={{ title: 'Setting' }} />
            <Tab.Screen name="Wallet" component={Wallet} options={{ title: 'Wallet' }} />
            <Tab.Screen name="Store" component={StoreScreen} options={{ title: 'Store' }} />
            <Tab.Screen name="Events" component={Events} options={{ title: 'Events' }} />
            <Tab.Screen name="Pathshala" component={Pathshala} options={{ title: 'Pathshala' }} />
            <Tab.Screen name="Karyashala" component={Karyashala} options={{ title: 'Karyashala' }} />
            <Tab.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'ProductDetails' }} />
            <Tab.Screen name="VideoPlay" component={VideoPlayingScreen} options={{ title: 'VideoPlay' }} />
            <Tab.Screen name="AudioPlay" component={AudioPlayingScreen} options={{ title: 'AudioPlay' }} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
