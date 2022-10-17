//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const PatientMenu = () => {
    return (
        <View style={styles.outerContainer}>
            <Text style={styles.lblMenuItem}>PatientMenu</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    outerContainer:{
        flex:1,
        backgroundColor:'#0098d9'
    },
    lblMenuItem:{
        fontSize:18
    }
})


//make this component available to the app
export default PatientMenu;
