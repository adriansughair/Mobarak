import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import Register from './register'

export default function RegisterIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Register props={props} />;
    
}
