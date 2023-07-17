import React, {useState} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Platform,
    SafeAreaView,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Image, ScrollView
} from 'react-native';
import {AntDesign, Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import {promo_banner} from "../../assets/images";
import Header from "../components/Header";
import {featuresData} from "../data/featuresData";
import {specialPromoData} from "../data/specialPromoData";


const HomeScreen = () => {

    const [features, setFeatures] = useState(featuresData);
    const [specialPromos, setSpecialPromos] = useState(specialPromoData);

    function renderPromos(){

        const renderItem = ({item}) => (
            <TouchableOpacity
                className={'my-1 w-3/6'}
                onPress={() => console.log(item.title)}
            >
                <View className={'h-24 rounded-t-md bg-[#0dbd6b]'}>
                    <Image
                        source={promo_banner}
                        resizeMode={'cover'}
                         className={'w-full h-full rounded-t-md'}
                    />
                </View>
                <View className={'p-2 bg-gray-100 rounded-b-md'}>
                    <Text className={'text-lg font-bold'}>{item.title}</Text>
                    <Text>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                ListHeaderComponent={Header}
                data={specialPromos}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={true}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'center', gap: 6,}}
                contentContainerStyle={{paddingHorizontal: 20}}
            />
        )
    }
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
                {renderPromos()}
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white'
    }
});
