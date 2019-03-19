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
import { connect } from 'react-redux';
import themeStyles from '../../styles/themeStyles'
const height = Dimensions.get('window').height;
const width =  Dimensions.get('window').width;

class HeaderComponent  extends React.Component{
render(){
    const { iconName = '', onBackHandler , title=''} = this.props
    return(
        <React.Fragment>
            <Header  style={ styles.header}>
                <Left style={{ alignSelf: 'center' }} onPress={ onBackHandler}>
                    <Icon
                        active
                        name={iconName}
                        style={{ color:"#fff" }}
                        onPress={onBackHandler}

                    />
                </Left>
                <Body>
                    <Title style={themeStyles.HEADER_STYLE_GLOBAL}>{title}</Title>
                </Body>
            </Header>
        </React.Fragment>
    )
}
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#613ec1",
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

export default connect (state => state)(HeaderComponent)