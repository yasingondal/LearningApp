//import liraries
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeUI from '../../../roles/patient/screens/homeScreen/HomeUI';
import PatientMenu from './PatientMenu';


const Drawer = createDrawerNavigator();

// create a component
const PatientDrawer = () => {
    return (
       <Drawer.Navigator drawerContent={props => <PatientMenu {...props} /> } >

        <Drawer.Screen
         name="Home Screen"
         component={HomeUI}
         />

        
       </Drawer.Navigator>
    );
};



//make this component available to the app
export default PatientDrawer;
