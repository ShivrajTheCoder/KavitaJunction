import React, { useRef, useState } from 'react';
import { Audio } from 'expo-av';
import { View, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';

export default function AudioPlayingScreen() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  async function handlePlayPause() {
    if (audioRef.current !== null) {
      if (!isPlaying) {
        await audioRef.current.playAsync();
        setIsPlaying(true);
      } else {
        await audioRef.current.pauseAsync();
        setIsPlaying(false);
      }
    }
  }

  async function handleSeekForward() {
    if (audioRef.current !== null) {
      const newPosition = position + 5000; // Seek forward by 5 seconds
      await audioRef.current.setPositionAsync(newPosition);
      setPosition(newPosition);
    }
  }

  async function handleSeekBackward() {
    if (audioRef.current !== null) {
      const newPosition = position - 5000; // Seek backward by 5 seconds
      await audioRef.current.setPositionAsync(newPosition);
      setPosition(newPosition);
    }
  }

  async function loadAudio() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: 'https://res.cloudinary.com/dzd53baqf/video/upload/v1711691938/samples/O_Mahi_O_Mahi_PagalWorld.com.cm_ejbhwl.mp3' },
        { shouldPlay: false }
      );
      audioRef.current = sound;
      const status = await sound.getStatusAsync();
      setDuration(status.durationMillis);
    } catch (error) {
      console.log('Error loading audio:', error);
    }
  }

  React.useEffect(() => {
    loadAudio();
    return () => {
      if (audioRef.current !== null) {
        audioRef.current.unloadAsync();
      }
    };
  }, []);

  React.useEffect(() => {
    const interval = setInterval(async () => {
      if (audioRef.current !== null && isPlaying) {
        const status = await audioRef.current.getStatusAsync();
        setPosition(status.positionMillis);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  function formatTime(milliseconds) {
    const totalSeconds = milliseconds / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={handleSeekBackward}>
          <Text style={styles.controlButton}>{'<<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <Text style={styles.controlButton}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSeekForward}>
          <Text style={styles.controlButton}>{'>>'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.durationText}>{formatTime(position)} / {formatTime(duration)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  controlButton: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  durationText: {
    fontSize: 18,
  },
});
