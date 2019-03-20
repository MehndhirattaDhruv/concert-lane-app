import React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    Button,
    Container,
    Icon,
    Root,
    Badge,
    Title,
    Content 
} from 'native-base'
import styles from './GenresComponentStyle'

const genres =[
    { id:  0, name: "Alternative", key: "Alternative" },
    { id:  1, name: "Rock", key: "Rock" },
    { id:  2, name: "Hip-Hop", key: "Hip-Hop" },
    { id:  3, name: "Country", key: "Country" },
    { id:  4, name: "Pop", key: "Pop" },
    { id:  5, name: "Latin", key: "Latin" },
    { id: 6,  name: "Dance/Electronic", key: "Dance/Electronic" },
    { id: 7, name: "Jazz", key: "Jazz" },
    { id: 8, name: "Classical", key: "Classical" },

]
import { HeaderComponent } from '../../components'

export default class GenresComponent extends React.Component {
    render() {
        return (
            <Root style={{ flex: 1 , backgroundColor:"#e5e5e5" }}>
                <HeaderComponent
                    iconName='arrow-back'
                    title = "Genres"  
                />
                <Text style={styles.title}>Please select your area of interest </Text>
                <Content>
                <View style={styles.ViewBadges}>
                    {
                        genres && genres.length ? genres.map((item, index) => {
                                return <TouchableOpacity onPress={() => this.props.navigation.navigate('ArtistsListing',{ type :item.key })} style={styles.gridSystem}>
                                <Text style={styles.textGenres}>{item.name}</Text>
                           </TouchableOpacity>
                        }) : null
                    }
                </View>
                </Content>
                
            </Root>
        )
    }
}
