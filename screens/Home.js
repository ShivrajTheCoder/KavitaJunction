import React from 'react'
import { Text, View } from 'react-native'
import Banner from '../components/HomeComponents/Banner'
import BhajanContainer from '../components/HomeComponents/BhajanContainer'
import SongContainer from '../components/HomeComponents/SongsContainer'

export default function Home() {
  return (
    <View>
        <Banner/>
        <BhajanContainer/>
        <SongContainer/>
    </View>
  )
}
