//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




// create a component
const HomeUI = (props) => {

    const { navigation } = props;
    const myIcon = <Icon name="home" size={30} color="#900" />;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { navigation.navigate("bottomNav") }} >
                <Text>Yaseen</Text>
                <View>{myIcon}</View>
            </TouchableOpacity>

        </View>
    );
};




// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default HomeUI;
