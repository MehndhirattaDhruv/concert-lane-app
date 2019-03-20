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
import { HeaderComponent, ContentLoaderArtistList } from '../../components'
import { connect } from 'react-redux'
class ArtistsListing extends React.Component {
 
    componentDidMount() {
        let type = this.props.navigation.getParam('type')
        actions.getArtistListingGenres(type).then(res =>{
            console.log(res  , "response of the genres listing ")
        }).catch(err => {
            console.log(err , "error occured ")
        })
    }

    render() {
        let { genresArtists = [], fetching } = this.props.genres

        return (
            <Root style={{ flex: 1 }}>
                <HeaderComponent
                    iconName='arrow-back'
                    title='Genres Artists'
                />
                <List>
                    {!fetching ? <FlatList
                        keyExtractor={(item, index) => { return index }}
                        data={genresArtists}
                        renderItem={({ item, index }) =>
                            <List>
                                <ListItem avatar onPress={() => this.props.navigation.navigate("ArtistsDetailGenres", { name: item.name })}>
                                    <Left>
                                        <Thumbnail source={{ uri: item.image[1]['#text'] || 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }} />
                                    </Left>
                                    <Body>
                                        <Text style={{ fontSize: 16, fontWeight: '800', color: "#2c2c46" }}>{item.name}</Text>
                                        <Text onPress={(text) => this.openSocialLink(item.url)}>{`More info - ${item.url} `}</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        }
                    /> : <ContentLoaderArtistList
                            count={30}
                        />
                    }
                </List>
            </Root>
        )
    }
}

export default connect(state => state)(ArtistsListing);
