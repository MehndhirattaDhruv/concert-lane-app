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
    GenresComponent,
    MyHomeScreen,
    FeaturesComponent,
    ArtistsDetail 
} from "./";
import { Icon } from "native-base";
import React, { Component, Fragment } from 'react'
import { View , Text  , StatusBar } from 'react-native'

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
        Featured: {
            screen: createStackNavigator(
                {
                    Features: {
                        screen: FeaturesComponent,
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
                },
                ArtistsDetail: {
                    screen: ArtistsDetail,
                    navigationOptions: () => ({ header: null })
                }
            }, {
                    defaultNavigationOptions: {
                        headerTintColor: "#5c2cce",
                    },
                }),
        },
        Genres: {
            screen: createStackNavigator({
                Genres: {
                    screen: GenresComponent,
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
                }
                else if (routeName === "Featured") {
                    source = "Featured";
                }
                 else if (routeName === "Blogs") {
                    source = "Blogs";
                } else if (routeName === "Artists") {
                    source =  "Artists";
                }
                else if (routeName === "Genres") {
                    source = "Genres";
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
            <React.Fragment>
                <Routes />
            </React.Fragment>
                
        );
    }
}

