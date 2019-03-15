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
    Content
} from 'native-base';
import moment from 'moment'
import styles from '../../containers/DiscoverEvents/DiscoverEventsStyles'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class CardComponents extends React.Component {
    render() {
        const { cardElements =[] } = this.props
        console.log(cardElements , "cardElements")
        return (
            <React.Fragment>
              {
                  cardElements && cardElements.length && cardElements.map((item)=>(
                      <TouchableWithoutFeedback>
                            <Card style={{ marginLeft : 10 , marginRight: 10, marginBottom:15 }}>
                                <CardItem cardBody>
                                    <Image source={item.image} style={styles.cardElementImage} />
                                </CardItem>
                                <CardItem style={{justifyContent: "space-evenly", paddingLeft: 0, paddingRight: 5, paddingTop: 10,paddingBottom: 10}}>
                                    <Left style={{ flexDirection: 'column', flex:1 , marginLeft:5  }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600', color:"#4f4f4f" , textAlign:"left" , width:"100%" }}>{moment(parseInt(item.date)).format('D')}</Text>
                                        <Text style={{ fontSize: 14, fontWeight: '600', color: "#f50050", textAlign:"left" , width:"100%" }}>{moment(parseInt(item.date)).format('MMMM')}</Text>
                                    </Left>
                                    <Body style={{ justifyContent:"center" , flexDirection: 'column' , flex:2 , }}>
                                        <Text numberOfLines={1} style={{  color:"#575757" , fontSize:14 , fontWeight: '600',}}>{item.title}</Text>
                                        <Text style={{ color:"#5e5e5e" , fontWeight:"600"}}>{`${item.time}- ${item.place}`}</Text>
                                    </Body>
                                    <Right style={{ flex:1 }}>
                                      <Button style={styles.buttonBook}><Text style={{ color:"#fff" }}>Book Now</Text></Button>
                                    </Right>
                                </CardItem>
                            </Card>
                      </TouchableWithoutFeedback>
                    )
                  )
                }
            </React.Fragment>
        )
    }
}
