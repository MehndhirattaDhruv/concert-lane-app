import React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    FlatList,
    Linking
} from 'react-native';
import {
    Button,
    Container,
    Icon,
    Root,
    Title,
    List,
    ListItem,
    Card,
    CardItem,
    Left,
    Right,
    Body,
    Thumbnail
} from 'native-base'
import actions from '../../actions'
import { HeaderComponent , ContentLoaderArtistList } from '../../components'
import { connect } from 'react-redux'
import axios from 'axios'
import { getArtists } from '../../actions/artists';
import themeStyles from '../../styles/themeStyles'
    class Artists extends React.Component {
        
    componentDidMount() {
        actions.getArtists()
    };
        
    openSocialLink = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }

    render() {
        console.log(this.props.artists , "props")
        let { artists =[]  , fetching  } =this.props.artists
        console.log(artists,"artistsss")

        return (
            <Root style={{ flex: 1 }}>
                <HeaderComponent
                    iconName='arrow-back'
                    openDrawer={() => this.props.navigation.openDrawer()}
                    title = 'Artists'
                />
                <List>
                  {!fetching   ?  <FlatList
                        keyExtractor={(item, index) => { return index }}
                        data={artists}
                        renderItem={({ item, index }) =>  
                            <List>
                                <ListItem avatar onPress={() => this.props.navigation.navigate("ArtistsDetail", { name:item.name })}>
                                    <Left>
                                        <Thumbnail source={{ uri: item.image[1]['#text'] || 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }} />
                                    </Left>
                                    <Body>
                                        <Text style={{ fontSize: 16, fontWeight: '800', color:"#2c2c46"}}>{item.name}</Text>
                                        <Text onPress={(text) => this.openSocialLink(item.url)}>{`More info - ${item.url} `}</Text>
                                    </Body>
                                </ListItem>
                            </List>
               }
                    /> : <ContentLoaderArtistList
                            count={50}
                        />
                    }
                </List>
            </Root>
        )
    }
}

export default connect(state => state)(Artists);
