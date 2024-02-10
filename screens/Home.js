import React from 'react'
import { Text, View } from 'react-native'
import Banner from '../components/HomeComponents/Banner'
import BhajanContainer from '../components/HomeComponents/BhajanContainer'

export default function Home() {
  return (
    <View>
        <Banner/>
        <BhajanContainer/>
    </View>
  )
}
