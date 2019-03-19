import React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    ScrollView
} from 'react-native';
import {
    Button,
    Container,
    Icon,
    Root,
    Title,
    Card ,
    CardItem,
    Content
} from 'native-base'

import { HeaderComponent, SearchBar, CardComponents, CorouselCardsComponent, ArtistsCorousel } from '../../components'
import themeStyles from '../../styles/themeStyles'
import  styles  from './FeaturedComponentsStyles'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const cardElements =[
    { id: 0, image: require('../../assets/concert1.jpeg'), title: "Chile Vibe", date:"1553768291000" , time:"5:00 PM" , place:"Kan sas city"},
    { id: 1, image: require('../../assets/concert2.jpeg'), title: "Live Music Unsigned  ", date: "1553422691000", time: "2:00 PM" , place:"Kuala lampur" },
    { id: 2, image: require('../../assets/concert3.jpg'), title: "The Art of Music by ~EterDis", date: "1553249891000", time: "7:00 PM"  ,place:"Manipur" },
    { id: 3, image: require('../../assets/concert4.jpeg'), title: "Kill Hannah by ~GraniteRoses", date: "1552213022000", time: "9:00 PM"  , place:"birmingham"},
]

const Artists =[
    { id: 0, name: "Ed Shareen" },
    { id: 1, name: "Rihana" },
    { id: 2, name: "Dustin" },
    { id: 3, name: "Drake" },
    { id: 4, name: "Justin" },
    { id: 5, name: "Alan Walker" },
    { id: 6, name: "Salena" }, 
    { id: 7, name: "Martin Luthar" }

]
 
export default class FeaturesComponent extends React.Component {
    state={
        searchTerm:""
    }

    onChangeSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }

    render() {
        let  { searchTerm } = this.state
        return (
            <Root>
                <HeaderComponent
                    iconName='arrow-back'
                    title='Featured Events'
                />
                {/* <Title style={themeStyles.HEADER_STYLE_GLOBAL}>Featured Events </Title> */}
                <SearchBar
                    searchTerm={searchTerm}
                    onChangeSearchTerm={this.onChangeSearchTerm}
                    placeholderTerm='Search'
                />
                <Content>
                    <View style={styles.subHeadingsView}>
                        <Text style={styles.subHeading}>
                            Upcoming Events
                        </Text>
                        <Text style={styles.subHeading}>
                            View all
                        </Text>
                    </View>    

                    <ScrollView
                        style={{ ...height > 730 ? styles.scrollViewHorizontal : styles.scrollViewSmallHorizontal }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <CorouselCardsComponent
                            cardElements={cardElements}
                        />
                    </ScrollView>

                    <View style={styles.subHeadingsView}>
                        <Text style={styles.subHeading}>
                            NearBy Events
                        </Text>
                        <Text style={styles.subHeading}>
                            View all
                        </Text>
                    </View>

                    <ScrollView
                        style={{ ...height > 730 ? styles.scrollViewHorizontal : styles.scrollViewSmallHorizontal }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <CorouselCardsComponent
                            cardElements={cardElements}
                        />
                    </ScrollView>

                    <View style={styles.subHeadingsView}>
                        <Text style={styles.subHeading}>
                            Featured Artists
                        </Text>
                        <Text style={styles.subHeading}>
                            View all
                        </Text>
                    </View>
                    <ScrollView
                        style={{ ...height > 730 ? styles.scrollViewHorizontal : styles.scrollViewSmallHorizontal }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <ArtistsCorousel
                            Artists={Artists}
                            onOpenArtistProfile={() => {}}
                        />
                    </ScrollView>
                </Content>
            </Root>
        )
    }
}
