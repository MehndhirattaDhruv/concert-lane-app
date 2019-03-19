//File Name: ContentLoaderCards.js
//Path: src/components/common
//Description: this component is used to show content Loaders when the data is  taking its time to come from Backend 
import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import ContentLoader from 'rn-content-loader';
import { Rect, Circle } from 'react-native-svg'
import { Container, Footer, FooterTab, Button, Icon, Card, Content } from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ContentLoaderArtistList extends PureComponent {
    render() {
        return ( 
            <Container>
                {this.props && [...Array(this.props.count || 50)].map((value, index) => (
                    <Card transparent style={styles.card} height={0.1 *height }>
                        <ContentLoader height={100} >
                            <Circle cx="30" cy="30" r="30" />
                            <Rect x="75" y="13" rx="4" ry="4" width={ width * 0.62 } height="13" />
                            <Rect x="75" y="37" rx="4" ry="4" width={width * 0.62 } height="13" />
                        </ContentLoader>
                    </Card>
                ))}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    footerIcon: {
        height: 25,
        width: 25,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain"
    },
    card: {
        marginLeft: 0.0392 * width,
        marginRight: 0.0392 * width,
        marginTop: 0.015 * height,
        marginBottom: 0.015 * height,
        paddingTop: 0.02 * height,
        paddingBottom: 0.02 * height
    }
})
