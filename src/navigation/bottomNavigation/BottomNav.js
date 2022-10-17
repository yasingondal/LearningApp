//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import BottomHomeUI from '../../roles/patient/screens/bottomHome/BottomHomeUI';
import BottomSettings from '../../roles/patient/screens/bottomSettings/BottomSettings';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BottomHomeUI} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={BottomSettings}
        options={{
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={20} color={'#0000'} />
          ),
        }} />
    </Tab.Navigator>
  );
}


// create a component
const BottomNav = () => {
  return (
    <MyTabs />
  );
};



//make this component available to the app
export default BottomNav;
