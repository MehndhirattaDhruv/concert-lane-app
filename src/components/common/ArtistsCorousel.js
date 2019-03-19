import React from 'react';

import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native'

import {
    Container,
    Root,
    Header,
    Left,
    Right,
    Title,
    Body,
    Icon,
    Thumbnail,
    Card,
    CardItem,
    Button,
    Content,
    Badge
} from 'native-base';
import moment from 'moment'
import styles from '../../containers/DiscoverEvents/DiscoverEventsStyles'
import { verticalScale } from '../../utilities/Sizes';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ArtistsCorousel extends React.Component {
    render() {
        const { Artists = [], onOpenArtistProfile} = this.props
        console.log(Artists , "artists ")
        return (
            <React.Fragment>
                {
                    Artists && Artists.length ? Artists.map((item,index) => ( 
                        <Badge onPress={(text)=> onOpenArtistProfile(item.name)} style={innerStyle.badge} key={index} info>
                            <Text onPress={(text) => onOpenArtistProfile(item.name)} style={innerStyle.text}>{item.name}</Text>
                        </Badge>
                    )
                    ) : null
                }
            </React.Fragment>
        )
    }
}


const innerStyle = StyleSheet.create({
    badge:{
        height:70,
        width:70,
        borderRadius:40,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        backgroundColor:"#2c2c46"
    },
    text:{
        fontSize: verticalScale(9),
        color:"#fff"
    }
})