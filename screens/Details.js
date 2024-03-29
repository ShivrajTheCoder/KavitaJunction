import React, { useContext, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import ProfileContainer from '../components/DetailsComponents/ProfileContainer';
import QuickPlayContainer from '../components/DetailsComponents/QuickPlayContainer';
import ThemeContext from '../contexts/ThemeProvider';
import PodcastContainer from '../components/HomeComponents/PoadcastContainer';

export default function Search() {
  const { theme } = useContext(ThemeContext);
  const [selCat,setSelCat]=useState(0);
  return (
    <ScrollView contentContainerStyle={[styles.scrollView, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
      <View style={styles.container}>
        {/* <ProfileContainer /> */}
        <PodcastContainer/>
        <QuickPlayContainer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: 20,
  }
});
