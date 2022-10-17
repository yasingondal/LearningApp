//import liraries
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import SplashUI from '../roles/patient/screens/splashScreen/SplashUI';
import LoginUI from '../roles/patient/screens/loginScreen/LoginUI';
import PatientDrawer from './sidebarDrawers/patientDrawer/PatientDrawer';
import HomeUI from '../roles/patient/screens/homeScreen/HomeUI';

// Bottom Navigation
import BottomNav from './bottomNavigation/BottomNav';
import BottomSettings from '../roles/patient/screens/bottomSettings/BottomSettings';
import BottomHomeUI from '../roles/patient/screens/bottomHome/BottomHomeUI';



const Stack = createStackNavigator();

// create a component
const AppNavigator = () => {

    return (
        <NavigationContainer>
            
           <Stack.Navigator initialRouteName="splashScreen">
            <Stack.Screen name="splashScreen" component={SplashUI} options={{headerShown:false}} />
            <Stack.Screen  name="patientDrawer" component={PatientDrawer} options={{headerShown:false}}  />
            <Stack.Screen name="loginScreen" component={LoginUI}  />
            <Stack.Screen name="homeScreen" component={HomeUI}  />


            {/* Bottom Navigation Screens */}
            <Stack.Screen name="bottomNav" component={BottomNav}  />
            <Stack.Screen name="settingsBottom" component={BottomSettings}  />
            <Stack.Screen name="bottomHome" component={BottomHomeUI}  />

           </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppNavigator;
