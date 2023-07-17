import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import Banner from "./Banner";
import Features from "./Features";


function renderHeader() {
    return (
        <View className={'flex-row my-2'}>
            <View className={'flex-1'}>
                <Text className={'font-bold text-xl'}>Hello!</Text>
                <Text className={'text-gray-600'}>Tumi</Text>
            </View>
            <View className={'items-center justify-center'}>
                <TouchableOpacity className={'h-8 w-8 justify-center items-center'}>
                    <FontAwesome5 name="bell" size={24} color="black"/>
                    <View className={'absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full'}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function renderPromoHeader() {
    return (
        <View className={'flex-row mb-2'}>
            <View className={'flex-1'}>
                <Text className={'text-lg font-bold'}>Special Promos</Text>
            </View>
            <TouchableOpacity
                onPress={() => console.log("view all")}
            >
                <Text>View All <AntDesign name="arrowright" size={24} color="black"/></Text>
            </TouchableOpacity>
        </View>
    )
}

const Header = () => {
    return (
        <View>
            {renderHeader()}
            <Banner/>
            <Features/>
            {renderPromoHeader()}
        </View>
    );
};

export default Header;
