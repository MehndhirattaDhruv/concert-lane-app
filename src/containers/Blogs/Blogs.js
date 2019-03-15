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
    Root
} from 'native-base'

import { HeaderComponent } from '../../components'

export default class Blogs extends React.Component {
    render() {
        return (
            <Root style={{ flex: 1 }}>
                <HeaderComponent
                    iconName='menu'
                    openDrawer={() => this.props.navigation.openDrawer()}
                />
                <Text>Hello I am Blogs screen</Text>
            </Root>
        )
    }
}
