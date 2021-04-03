import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartPage from "../Screens/StartPage/index"
// import UserLogin from "../Screens/UserLogin/index";
export default function index() {
    const Stack = createStackNavigator();    
    
    return (
        <NavigationContainer screenOptions={{ headerShown: false }}>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="StartPage" component={StartPage} />
                {/* <Stack.Screen options={{headerShown: false}} name="Login" component={UserLogin} /> */}
            </Stack.Navigator> 
        </NavigationContainer>
      );
}