import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TopNav from '../components/TopNav';


export default function Premium() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <TopNav heading={"Calender"} />
      </View>
      <View style={styles.contentCont} >
        <Text style={styles.day} >Monday</Text>
        <View style={styles.content}>
          <View style={styles.timeCont} >
            <Text style={styles.time} >16:30</Text>
          </View>
          <View style={styles.titleCont} >
            <Text style={styles.title} >
              To know about TOASTING
            </Text>
            <Text style={styles.name}>
              coach name
            </Text>
          </View>
          <TouchableOpacity style={styles.button} >
            <Text>Join</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.timeCont} >
            <Text style={styles.time} >16:30</Text>
          </View>
          <View style={styles.titleCont} >
            <Text style={styles.title} >
              To know about TOASTING
            </Text>
            <Text style={styles.name}>
              coach name
            </Text>
          </View>
          <TouchableOpacity style={styles.button} >
            <Text>Join</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.timeCont} >
            <Text style={styles.time} >16:30</Text>
          </View>
          <View style={styles.titleCont} >
            <Text style={styles.title} >
              To know about TOASTING
            </Text>
            <Text style={styles.name}>
              coach name
            </Text>
          </View>
          <TouchableOpacity style={styles.button} >
            <Text>Join</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.timeCont} >
            <Text style={styles.time} >16:30</Text>
          </View>
          <View style={styles.titleCont} >
            <Text style={styles.title} >
              To know about TOASTING
            </Text>
            <Text style={styles.name}>
              coach name
            </Text>
          </View>
          <TouchableOpacity style={styles.button} >
            <Text>Join</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  container: {
    paddingBottom: 20,
  
  },
  day: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  contentCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: 'black'
  },
  name: {
    color: "black"
  },
  time: {
    color: 'white'
  },
  timeCont: {
    backgroundColor: "#0077b6",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 4
  },
  button: {
    backgroundColor: "#ced4da",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  titleCont: {
    // backgroundColor:"#7f5539",
    paddingHorizontal: 10,
    borderRadius: 10
  }
});
