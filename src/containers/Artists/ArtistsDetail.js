import React from 'react';
import{
    StyleSheet,
    Dimensions,
    View,
    Image,
    Text,
    WebView,
    ScrollView
} from 'react-native'
import{
    Card,
    CardItem,
    Left,
    Right,
    Body,
    Button,
    Content,
    Title 
} from 'native-base'
import { connect } from 'react-redux'
import themeStyles from '../../styles/themeStyles'
import { HeaderComponent , ArtistsCorousel } from '../../components';
import actions from '../../actions'
import styles from './ArtistsDetailStyle';
class ArtistsDetail extends React.Component{
    state={
        name:"",
        artistDetail:{}
    }
      
    componentDidMount() {
        let name = this.props.navigation.getParam("name");
        this.setState({ name })
        console.log(name  , "in component did mount")
        actions.getArtistDetail(name)
        .then(res => {
            this.setState({
                artistDetail:{
                    ...res.artist
                }
            })
        })

    }

    componentDidUpdate(prevProps , prevState){
        if (this.props.name != prevProps.name) {  
            let name = this.props.navigation.getParam("name");
            this.setState({ name })
            actions.getArtistDetail(name).then(res =>{
                this.setState({
                    artistDetail: {
                        ...res.artist
                    }
                })
            })
            
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.name !== prevState.name) {
            return {
                name: nextProps.name
            };
        }
        return null;
    }

    onOpenArtistProfile =(name) =>{
        console.log(name ,"nmam")
        this.setState({ name})
        actions.getArtistDetail(name).then(res =>{
            this.setState({
                artistDetail: {
                    ...res.artist
                }
            })
        })
    }
    
    render(){
        let { artistDetail } = this.state;
        let { fetching } = this.props && this.props.artists
        console.log(artistDetail , "artist detail") 
        const regex = /(<([^>]+)>)/ig;
        return(
            <Content style={styles.content}>
                <HeaderComponent
                    iconName="arrow-back"
                    onBackHandler={() => this.props.navigation.pop()}
                    title = "Artist Details"
                />
                {/* <Title style = {themeStyles.HEADER_STYLE_GLOBAL}>Artist Details</Title> */}
                <View style={styles.coverView}>
                    
                </View>
                <View style={styles.innerView}>
                    <Image style={styles.coverImage} source={{ uri: artistDetail && artistDetail.image && artistDetail.image[1]['#text'] || 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }}  />
                    <Text style={styles.artistName}>{artistDetail.name}</Text>
                    <Text numberOfLines={12} style={styles.bio}>{artistDetail && artistDetail.bio && artistDetail.bio.summary.replace(regex, '') }</Text>
                </View>
                
                <View style={styles.subHeadingsView}>
                    <Text style={styles.subHeading}>
                        Related Artists
                        </Text>
                    <Text style={styles.subHeading}>
                        View all
                    </Text>
                </View>
                <ScrollView
                    style={styles.scrollView}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                <ArtistsCorousel
                    onOpenArtistProfile={(text) => this.onOpenArtistProfile(text)}
                    Artists = {artistDetail &&  artistDetail.similar && artistDetail.similar.artist}
                />
                </ScrollView>

            </Content>
        )
    }
}


export default connect (state => state)(ArtistsDetail);