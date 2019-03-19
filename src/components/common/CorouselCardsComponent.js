import React from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    Text
} from 'react-native';

import {
    Card,
    CardItem,
    Left,
    Right,
    Body,
    Button
 }  from 'native-base';

import moment from 'moment'
import styles from '../../containers/DiscoverEvents/DiscoverEventsStyles'
import { verticalScale } from '../../utilities/Sizes';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

 export default  class CorouselCardsComponent extends React.Component{
     render(){
         let { cardElements =[] } = this.props
         return(
             <React.Fragment>
                 {
                     cardElements && cardElements.length && cardElements.map((item, index) => (
                         <TouchableWithoutFeedback key={index}> 
                             <Card style={Innerstyles.cardStyle}>
                                 <CardItem cardBody>
                                     <Image source={item.image} style={styles.cardElementImage} />
                                 </CardItem>
                                 <CardItem style={Innerstyles.cardItem}>
                                     <Left style={{ flexDirection: 'column', flex: 1, marginLeft: 5 }}>
                                         <Text style={{ color: "#4f4f4f", ...Innerstyles.cardText }}>{moment(parseInt(item.date)).format('D')}</Text>
                                         <Text style={{ color: "#f50050", ...Innerstyles.cardText }}>{moment(parseInt(item.date)).format('MMMM')}</Text>
                                         <Text style={{ color: "#f50050", ...Innerstyles.cardText }}>{item.time}</Text>
                                     </Left>
                                     <Body style={{ justifyContent: "center", flexDirection: 'column', flex: 1, }}>
                                         <Text numberOfLines={1} style={{ color: "#000", fontSize: verticalScale(12), fontWeight: '800', }}>{item.title}</Text>
                                         <Text style={{ color: "#5e5e5e", fontWeight: "600" , fontSize: verticalScale(12), }}>{item.place}</Text>
                                     </Body>
                                     <Right style={{ flex: 2 }}>
                                         <Button style={styles.buttonBook}><Text style={{ color: "#fff", fontSize: verticalScale(12) }}>Book Now</Text></Button>
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


 const Innerstyles  = StyleSheet.create({
     cardStyle:{
        marginLeft: 10,
        marginRight: 10, 
        marginBottom: 15, 
        height: 'auto',
        width: 0.75 * width,
        backgroundColor: 'red',
     },
     cardText:{
        fontSize: verticalScale(12), 
        fontWeight: '600', 
        color: "#4f4f4f", 
        textAlign: "left", 
        width: "100%" 
     },
     cardItem:{
        justifyContent: "space-evenly", 
        paddingLeft: 0, 
        paddingRight: 5, 
        paddingTop: 10, 
        paddingBottom: 10
     }
 })