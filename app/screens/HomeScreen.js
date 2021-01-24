import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import backgroundImage from '../images/backgroundImage.jpg';

const HomeScreen = () => {
    return (
        <ImageBackground
            source={backgroundImage}
            style={{ width: "100%", flex: 1 }}
            blurRadius={0}>
            <SafeAreaView>
                <View style={styles.view}>
                    <Text style={styles.text}>
                        Welcome To bookworm.com
                    </Text>
                    <Text>

                    </Text>
                </View>
            </SafeAreaView>

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
    text: {
        textAlign: "center",
        textDecorationColor: "wheat",
        fontSize: 30,
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontStyle: "normal",
        color: "#800090",
    }
})

export default HomeScreen;