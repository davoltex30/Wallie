import React from 'react';

import {Image, Text, View} from 'react-native';
import {banner} from "../../assets/images";

const Banner = () => {
    return (
        <View className={'h-32 w-full rounded-md'}>
            <Image
                source={banner}
                resizeMode={'cover'}
                className={'h-full w-full rounded-md'}
            />
        </View>
    );
};

export default Banner;
