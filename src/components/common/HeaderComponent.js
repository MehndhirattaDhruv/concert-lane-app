import React from 'react';

import {  
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
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
    Thumbnail
} from 'native-base';

const height = Dimensions.get('window').height;
const width =  Dimensions.get('window').width;

export default class HeaderComponent  extends React.Component{
render(){
     const { iconName ='' } = this.props
    return(
        <React.Fragment>
            <Header  style={ styles.header}>
                <Left style={{ alignSelf: 'center' }}>
                    <Icon
                        active
                        name={iconName}
                    />
                </Left>
                <Body>
                </Body>
            </Header>
        </React.Fragment>
    )
}
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: "transparent",
        elevation: 0,
        borderColor: "#fff",
        borderBottomWidth: 0,
        shadowRadius: 0,
        shadowOpacity: 0,
        shadowOffset: {
            height: 0
        },
    }
})