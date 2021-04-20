import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import Login from './login'

export default function LoginIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Login props={props} />;
    
}
