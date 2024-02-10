import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import UserInfo from '../components/DetailsComponents/UserInfo';
import CategoriesSlider from '../components/DetailsComponents/CategoriesSlider';
import ProfileContainer from '../components/DetailsComponents/ProfileContainer';
import QuickPlayContainer from '../components/DetailsComponents/QuickPlayContainer';

export default function Details() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <UserInfo />
        <CategoriesSlider />
        <ProfileContainer />
        <QuickPlayContainer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: "#022b3a",
  },
  container: {
    paddingBottom: 20, 
  }
});
