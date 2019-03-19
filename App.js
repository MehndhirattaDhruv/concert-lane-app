import React from 'react';

import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import { YellowBox } from 'react-native';

import {
  Container,
  Root,
  
} from 'native-base'
import { Provider } from 'react-redux'
import Routes from './src/containers/Routes'
import store from './src/store'

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
          <Provider store={store}>
            <Routes />
          </Provider>
            
        </Container>
      </Root>
       
    )
  }
}
