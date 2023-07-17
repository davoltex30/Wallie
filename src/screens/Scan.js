import React from 'react';

import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const Scan = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Text>scan screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});
export default Scan;
