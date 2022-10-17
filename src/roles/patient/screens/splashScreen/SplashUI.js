//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';

// create a component
const SplashUI = ({ navigation }) => {


    setTimeout(() => {
        navigation.navigate("patientDrawer");
    }, 2000);

    return (

        <View style={styles.container}>
            <Animatable.Text animation="zoomInUp" style={{ color: '#0098d9', fontSize: 28 }}>Cloud Clinic</Animatable.Text>
            <ActivityIndicator size={"large"} style={styles.activityCircle} />
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
    splashText: {
        fontSize: 22,
        color: '#0098d9',
        fontFamily: ''
    },
    activityCircle: {
        marginTop: 20,
    }
});

//make this component available to the app
export default SplashUI;
