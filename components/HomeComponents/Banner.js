import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image style={styles.backgroundImg} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575266/kj%20images/episodes-1_xhskgo.jpg" }} />
        <View style={styles.overlay}>
          <Image style={styles.image} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1709972737/kj%20images/kahojiicon_rzxrty.png" }} />
          <View style={styles.controlsCont}>
            <Text style={styles.text}>Kaho Ji</Text>
            <View style={styles.iconCont}>
              <View style={styles.controls}>
                <View style={styles.playCont}>
                  <Image style={styles.play} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1707581213/kj%20images/icons/play_pal4kz.png" }} />
                </View>
                <Text style={{ color: "white", marginHorizontal: 20, fontWeight: 900 }}>Play Now</Text>
              </View>
              <View style={styles.plusCont}>
              {/* <Image style={styles.plus} source={{ uri: "https://res.cloudinary.com/dushmacr8/image/upload/v1707581778/kj%20images/icons/plus_u77rgk.png" }} /> */}
              <Text style={styles.plus} >+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    height: windowHeight * 0.5,
    width: '100%',
    overflow: 'hidden',
  },
  backgroundImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // resizeMode: 'cover',
  },
  overlay: {
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 100,
    height: 100,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#e9ecef',
    fontWeight: 'bold',
  },
  controlsCont: {
    justifyContent: 'center',
    alignItems: "center",
    color: "white",
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    backgroundColor: "#03045e",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    // marginVertical:"30"
  },
  play: {
    height: 20,
    width: 20
  },
  playCont: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 5
  },
  iconCont:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  },
  plus:{
    color:"white",
    fontSize:20,
    fontWeight:"900"
  },
  plusCont:{
    marginHorizontal:10,
    backgroundColor:"#03045e",
    borderRadius:10,
    height:45,
    width:45,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
});
