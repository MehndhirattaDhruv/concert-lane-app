import React from 'react';

import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { YellowBox } from 'react-native';

import {
  Container,
  Root
} from 'native-base'

import Routes from './src/containers/Routes'

export default class App extends React.Component{
 
  render(){
    console.disableYellowBox = true;
    // const _XHR = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest?
    //   GLOBAL.originalXMLHttpRequest :
    //   GLOBAL.XMLHttpRequest

    // XMLHttpRequest = _XHR
    return(
      <Root>
        <Container style={{ backgroundColor:"#fff" }}>
            <Routes />
        </Container>
      </Root>
       
    )
  }
}
