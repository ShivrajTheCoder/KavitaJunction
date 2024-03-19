import React, { useContext } from 'react'
import { View } from 'react-native'
import Banner from '../../components/HomeComponents/Banner'
import LiveContainer from '../../components/HomeComponents/LiveContainer'
import ProfileContainer from '../../components/DetailsComponents/ProfileContainer'
import BhajanContainer from '../../components/HomeComponents/BhajanContainer'
import SongsContainer from '../../components/HomeComponents/SongsContainer'
import RecentReplays from '../../components/HomeComponents/RecentReplays'
import SearchOptions from '../../components/HomeComponents/SearchOptions'
import HomeHaatContainer from '../../components/HomeComponents/HomeHaatContainer'
import PodcastContainer from '../../components/HomeComponents/PoadcastContainer'
import OriginalsContainer from '../../components/HomeComponents/OriginalsContiner'
import ThemeContext from '../../contexts/ThemeProvider'

export default function All({navigation}) {
    const {theme}=useContext(ThemeContext);
    console.log(theme);
    return (
        <View>
            <Banner />
            <LiveContainer />
            <ProfileContainer live={true} />
            <BhajanContainer />
            <SongsContainer />
            <HomeHaatContainer/>
            <PodcastContainer/>
            <OriginalsContainer/>
            <RecentReplays />
            <SearchOptions navigation={navigation} />
        </View>
    )
}
