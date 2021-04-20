import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartPage from "../Screens/StartPage/index"
import UserLogin from "../Screens/UserLogin/index";
import Register from "../Screens/Register/index";
import Home from "../Screens/Home/index";
import Profile from "../Screens/Profile/index";
import Filter from "../Screens/FilterTeacher/index";
import TeacherList from"../Screens/TeacherList/index";
import PaymantStatus from "../Screens/PaymantStatus/index";
import AddCard from "../Screens/AddCard/index";
import Requset from "../Screens/Requset/index";
import TeacherRegister from "../Screens/TeacherRegister/index";
import TeacherLogin from "../Screens/TeacherLogin/index";
import TeacherHome from "../Screens/TeacherHome/index";
import TeacherSchedule from "../Screens/TeacherSchedule/index";
import TeacherReviews from "../Screens/TeacherReviews/index";
import TeacherHistory from "../Screens/TeacherHistory/index";
import TeacherAccounting from "../Screens/TeacherAccounting/index";
import Menu from "../components/Menu";
import chat from "../Screens/Chat/chat";
export default function index() {
    const Stack = createStackNavigator();    
    
    return (
        <NavigationContainer screenOptions={{ headerShown: false }}>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="chat" component={chat} />
                <Stack.Screen options={{headerShown: false}} name="StartPage" component={StartPage} />
                <Stack.Screen options={{headerShown: false}} name="Login" component={UserLogin} />
                <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
                <Stack.Screen options={{headerShown: false}} name="Menu" component={Menu} />
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
                <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
                <Stack.Screen options={{headerShown: false}} name="Filter" component={Filter} />
                <Stack.Screen options={{headerShown: false}} name="TeacherList" component={TeacherList} />
                <Stack.Screen options={{headerShown: false}} name="PaymantStatus" component={PaymantStatus} />
                <Stack.Screen options={{headerShown: false}} name="Requset" component={Requset} />
                <Stack.Screen options={{headerShown: false}} name="AddCard" component={AddCard} />
            
                <Stack.Screen options={{headerShown: false}} name="TeacherLogin" component={TeacherLogin} />
                <Stack.Screen options={{headerShown: false}} name="TeacherRegister" component={TeacherRegister} />
                <Stack.Screen options={{headerShown: false}} name="TeacherHome" component={TeacherHome} />
                <Stack.Screen options={{headerShown: false}} name="TeacherSchedule" component={TeacherSchedule} />
                <Stack.Screen options={{headerShown: false}} name="TeacherReviews" component={TeacherReviews} />
                <Stack.Screen options={{headerShown: false}} name="TeacherHistory" component={TeacherHistory} />
                <Stack.Screen options={{headerShown: false}} name="TeacherAccounting" component={TeacherAccounting} />
                
            </Stack.Navigator> 
        </NavigationContainer>
      );
}