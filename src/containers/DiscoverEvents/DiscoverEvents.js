import React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';
import {
    Button,
    Container,
    Icon,
    Root,
    Title,
    Content
} from 'native-base'
import { HeaderComponent, CardComponents , SearchBar } from '../../components'
import SplashScreen from 'react-native-splash-screen'
import themeStyles from '../../styles/themeStyles'
import styles from './DiscoverEventsStyles';

const cardElements =[
    { id: 0, image: require('../../assets/concert1.jpeg'), title: "Chile Vibe", date:"1553768291000" , time:"5:00 PM" , place:"Kan sas city"},
    { id: 1, image: require('../../assets/concert2.jpeg'), title: "Live Music Unsigned  ", date: "1553422691000", time: "2:00 PM" , place:"Kuala lampur" },
    { id: 2, image: require('../../assets/concert3.jpg'), title: "The Art of Music by ~EterDis", date: "1553249891000", time: "7:00 PM"  ,place:"Manipur" },
    { id: 3, image: require('../../assets/concert4.jpeg'), title: "Kill Hannah by ~GraniteRoses", date: "1552213022000", time: "9:00 PM"  , place:"birmingham"},
]

export default class DiscoverEvents extends React.Component {
    state={
        searchTerm:""
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    onChangeSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }

    render() {
        let { searchTerm } = this.state
        return (
            <Root style={{ flex: 1 }}>
                <HeaderComponent
                    iconName = 'arrow-back'
                    title= "Discover Events"
                />
                {/* <Title style={themeStyles.HEADER_STYLE_GLOBAL}> </Title> */}
                <SearchBar
                    searchTerm={searchTerm}
                    onChangeSearchTerm={this.onChangeSearchTerm}
                    placeholderTerm = 'Search groups,events,artist'
            />
                <Content>
                <CardComponents
                    cardElements={cardElements}
                />
                </Content>
               
            </Root>
        )
    }
}


