import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data = [
  {
    name: "all",
    id: 1,
  },
  {
    name: "circles",
    id: 2,
  },
  {
    name: "channels",
    id: 3,
  },
  {
    name: "communites",
    id: 4,
  },
];

export default function CategoriesSlider({ changeCategory, selectedComp }) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.categoryTile,
              selectedComp === item.name ? styles.selectedCategoryTile : null
            ]}
            onPress={() => changeCategory(item.name)}
          >
            <Text style={[styles.name, selectedComp === item.name ? styles.selectedName : null]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  categoryTile: {
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0", // Light grey background for unselected categories
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 10,
  },
  selectedCategoryTile: {
    backgroundColor: "black", // Grey background for the selected category
  },
  name: {
    color: "black",
  },
  selectedName: {
    color: "white", // White text color for the selected category
  },
});
