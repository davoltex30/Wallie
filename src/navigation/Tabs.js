import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import {AntDesign, Entypo, Ionicons} from "@expo/vector-icons";
import Scan from "../screens/Scan";
import Svg, {Path} from "react-native-svg";

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({accessibilityLabel, accessibilityState, children, onPress}) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View
                    className={'flex-row absolute top-0'}
                >
                    <View className={'flex-1 bg-white'}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={"#fff"}
                        />
                    </Svg>
                    <View className={'flex-1 bg-white'}></View>
                </View>

                <TouchableOpacity
                    className={'justify-center items-center rounded-full -top-4 bg-[#0dbd6b] w-11 h-11'}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                className={'flex-1 justify-center items-center bg-white w-11 h-12'}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "transparent",
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    elevation: 0,
                }
            }}
            initialRouteName={'Home'}
        >
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        focused ?
                            <Entypo name="home" size={24} color="black"/>
                            :
                            <AntDesign name="home" size={24} color="black"/>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton {...props}/>
                    )
                }}
            />
            <Tab.Screen
                name={'Scan'}
                component={Scan}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        focused ?
                            <Ionicons name="scan-circle" size={24} color="black"/>
                            :
                            <Ionicons name="scan-circle-outline" size={24} color="black"/>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton {...props}/>
                    )
                }}
            />
            <Tab.Screen
                name={'User'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        focused ?
                            <Ionicons name="person" size={24} color="black"/>
                            :
                            <Ionicons name="person-outline" size={24} color="black"/>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton {...props}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
