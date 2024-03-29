import React, { useContext, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import QuickPlayContainer from '../components/DetailsComponents/QuickPlayContainer';
import ThemeContext from '../contexts/ThemeProvider';
import PodcastContainer from '../components/HomeComponents/PoadcastContainer';

export default function Search({selected}) {
  const { theme } = useContext(ThemeContext);
  const [selCat,setSelCat]=useState(selected?.selId ? selected: {selId:0, name:"all"});
  return (
    <ScrollView contentContainerStyle={[styles.scrollView, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
      <View style={styles.container}>
        {/* <ProfileContainer /> */}
        <PodcastContainer setSelCat={setSelCat} />
        <QuickPlayContainer selCat={selCat} />
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
