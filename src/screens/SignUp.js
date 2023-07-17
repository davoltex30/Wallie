import React, {useEffect, useState} from 'react';
import {countries} from "../components/countries";
import {
    FlatList,
    Image, Modal,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity, TouchableWithoutFeedback,
    View
} from 'react-native';
import {us_flag, wallieLogo} from "../../assets/images";
import {AntDesign, Entypo} from '@expo/vector-icons';

const SignUp = ({navigation}) => {

    const [dial_code, setDial_code] = React.useState("");
    const [areas, setAreas] = React.useState([])
    const [selectedArea, setSelectedArea] = React.useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => {
                let areaData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://www.flagsapi.com/${item.alpha2Code}/flat/64.png`
                    }
                })

                setAreas(areaData)

                if (areaData.length > 0) {
                    let defaultData = areaData.filter(a => a.code === "CM")


                    if (defaultData.length > 0) {
                        setSelectedArea(defaultData[0])
                    }
                }
            })
    }, [])

    function renderAreaCodesModal() {
        const renderItem = ({item}) => {

            return (
                <TouchableOpacity
                    className={'flex-row p-2 space-x-3'}
                    onPress={() => {
                        setSelectedArea(item)
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={{uri: item.flag}}
                        className={'w-5 h-5'}
                    />
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View className={'flex-1 items-center justify-center'}>
                        <View className={'h-80 w-10/12 rounded-lg bg-green-100'}>
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.code}
                                showsVerticalScrollIndicator={false}
                                className={'p-2 mb-2'}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        )
    }

    return (
        <SafeAreaView style={styles.AndroidSafeArea} className={'bg-[#0dbd6b] flex-1'}>
            <View className={'justify-center items-center mt-14 w-full space-y-10'}>
                <Image source={wallieLogo} className={'w-56 h-32'}/>

                <View className={'w-11/12 space-y-6'}>
                    <View>
                        <Text className={'text-white text-l'}>Full Name</Text>
                        <TextInput
                            className={'border-b-2 border-white bg-transparent text-white p-2'}
                            placeholder={'Enter Full Name'}
                            placeholderTextColor={'#fff'}
                        />
                    </View>
                    <View>
                        <Text className={'text-white text-l'}>Email</Text>
                        <TextInput
                            className={'border-b-2 border-white bg-transparent text-white p-2'}
                            placeholder={'Enter Email address'}
                            placeholderTextColor={'#fff'}
                        />
                    </View>
                    <View className={'flex-col space-y-4'}>
                        <Text className={'text-white text-l'}>Phone Number</Text>
                        <View className={'flex-row space-x-2'}>
                            <TouchableOpacity
                                className={'border-b-2 border-white bg-transparent text-white flex-row justify-center items-center space-x-1'}
                                onPress={() => setModalVisible(true)}
                            >
                                <AntDesign name="down" size={15} color="white"/>
                                <Image
                                    source={{uri: selectedArea?.flag}}
                                    resizeMode={'contain'}
                                    className={'w-5 h-5'}
                                />
                                <Text className={'text-white'}>{selectedArea?.callingCode}</Text>
                            </TouchableOpacity>
                            <TextInput
                                className={'border-b-2 border-white bg-transparent text-white p-2 grow'}
                                placeholder={"Enter Phone Number"}
                                placeholderTextColor={"#fff"}
                                inputMode={"numeric"}
                            />
                        </View>
                    </View>
                    <View className={'mb-8'}>
                        <Text className={'text-white text-l'}>Password</Text>
                        <TextInput
                            className={'border-b-2 border-white bg-transparent text-white p-2 grow'}
                            placeholder={"Enter Password"}
                            placeholderTextColor={"#fff"}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            className={'absolute right-1 bottom-2'}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <Entypo name="eye-with-line" size={24} color="#fff"/>
                            ) : (
                                <Entypo name="eye" size={24} color="#fff"/>
                            )}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        className={'bg-black p-3 items-center justify-center rounded-xl'}
                        onPress={navigation.navigate('Tabs')}
                    >
                        <Text className={'text-white text-xl'}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {renderAreaCodesModal()}
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});

export default SignUp;
