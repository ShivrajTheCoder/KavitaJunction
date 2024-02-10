import React from 'react'
import { Text, View } from 'react-native'
import BhajanTile from './BhajanTile'

export default function BhajanContainer() {
  return (
    <View>
        <Text>Bhajan container</Text>
        <View>
            <BhajanTile/>
            <BhajanTile/>
            <BhajanTile/>
            <BhajanTile/>
        </View>
    </View>
  )
}
