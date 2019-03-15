import React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';
import {
    Button,
    Container,
    Icon,
    Root,
    Title,
    Input,
    Item
} from 'native-base'
import styles from '../../containers/DiscoverEvents/DiscoverEventsStyles'

export default class SearchBar extends React.Component {
    render() {
        let { searchTerm = '', onChangeSearchTerm} =this.props
        return (
            <Item regular style={styles.searchBar}>
                <Icon name="ios-search" />
                <Input 
                    placeholder="Search groups,events,artist" 
                    value={searchTerm}
                    style={{ fontSize: 12 }} 
                    onChangeText={(text) => onChangeSearchTerm(text)}
                />
            </Item>
        )
    }
}


