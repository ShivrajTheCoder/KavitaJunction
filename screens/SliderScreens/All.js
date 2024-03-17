import React from 'react'
import { View } from 'react-native'
import Banner from '../../components/HomeComponents/Banner'
import LiveContainer from '../../components/HomeComponents/LiveContainer'
import ProfileContainer from '../../components/DetailsComponents/ProfileContainer'
import BhajanContainer from '../../components/HomeComponents/BhajanContainer'
import SongsContainer from '../../components/HomeComponents/SongsContainer'
import RecentReplays from '../../components/HomeComponents/RecentReplays'
import SearchOptions from '../../components/HomeComponents/SearchOptions'
import HomeHaatContainer from '../../components/HomeComponents/HomeHaatContainer'

export default function All({navigation}) {
    return (
        <View>
            <Banner />
            <LiveContainer />
            <ProfileContainer live={true} />
            <BhajanContainer />
            <SongsContainer />
            <HomeHaatContainer/>
            <RecentReplays />
            <SearchOptions navigation={navigation} />
        </View>
    )
}
