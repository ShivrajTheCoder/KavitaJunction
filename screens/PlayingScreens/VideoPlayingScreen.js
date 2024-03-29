import React, { useRef } from 'react';
import { Video } from 'expo-av';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function VideoPlayingScreen() {
  const videoRef = useRef(null);

  return (
    <TouchableWithoutFeedback onPress={() => videoRef.current.presentFullscreenPlayer()}>
      <View style={styles.container}>
        <Video
          ref={videoRef}
          source={{ uri: 'https://res.cloudinary.com/dzd53baqf/video/upload/v1647709082/samples/sea-turtle.mp4' }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          isLooping
          shouldPlay
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
