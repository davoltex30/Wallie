import React from 'react';

import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import {featuresData} from "../data/featuresData";

const Features = () => {



    const Heading = () => (
        <View>
            <Text className={'text-xl font-bold'}>Features</Text>
        </View>
    )

    const renderItem = ({item}) => (
        <TouchableOpacity
            className={'flex-1 items-center mt-6'}
            onPress={() => console.log(item.description)}
        >
            <View
                className={`h-10 w-10 rounded-lg items-center justify-center`}
                style={{backgroundColor: item.backgroundColor}}
            >
                {item.icon}
            </View>
            <Text className={'text-center flex-wrap mt-3'}>{item.description}</Text>
        </TouchableOpacity>
    )

    return (
        <FlatList
            ListHeaderComponent={Heading}
            data={featuresData}
            numColumns={4}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            className={'my-3 h-58'}
        />
    );
};

export default Features;
