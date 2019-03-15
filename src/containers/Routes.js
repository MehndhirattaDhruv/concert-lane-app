import {
    createMaterialTopTabNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";
import { 
    DiscoverEvents,
    Blogs, 
    Artists, 
    MyHomeScreen 
} from "./";
import { Icon } from "native-base";
import React, { Component, Fragment } from 'react'
import { View , Text } from 'react-native'

const BottomNav = createBottomTabNavigator(
    {
        DiscoverEvents: {
            screen: createStackNavigator(
                {
                    DiscoverEvents: {
                        screen: DiscoverEvents,
                        navigationOptions: () => ({ header: null })
                    },
                },
                {
                    defaultNavigationOptions: {
                        headerTintColor: "#5c2cce",
                    },
                }
            ),
            navigationOptions: {
                animationEnabled: false
            }
        },
        Blogs: {
            screen: createStackNavigator(
                {
                    Blogs: {
                        screen: Blogs,
                        navigationOptions: () => ({ header: null })
                    }
                },
                {
                    defaultNavigationOptions: {
                        headerTintColor: "#5c2cce",
                    },
                }
            ),
        },

        Artists: {
            screen: createStackNavigator({
                Artists: {
                    screen: Artists,
                    navigationOptions: () => ({ header: null })
                }
            }, {
                    defaultNavigationOptions: {
                        headerTintColor: "#5c2cce",
                    },
                }),
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let source;
                if (routeName === "DiscoverEvents") {
                    source  = "Discover";
                } else if (routeName === "Blogs") {
                    source = "Blogs";
                } else if (routeName === "Artists") {
                    source =  "Artists";
                }
                return  <Text>{source}</Text>
                // return <Image style={{ width: 25, height: 25, resizeMode: "contain" }} source={source} />;
            }
        }),

        tabBarOptions: {
            activeTintColor: "#5c2cce",
            showLabel: false
        },
    }
);

const Home = createStackNavigator(
    {
        bottomNav: {
            screen: BottomNav,
            navigationOptions: ({ navigation }) => ({
                header: null,

            }),
        }
    },
    {
        defaultNavigationOptions: {
            headerTintColor: "#5c2cce",
        },
    }
);

const mainNav = createSwitchNavigator({
    Homepage: Home
});
const Routes = createAppContainer(mainNav);

export default class extends Component {
    render() {
        return (
                <Routes />
        );
    }
}

