import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import TeacherRegister from './TeacherRegister'

export default function TeacherRegisterIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <TeacherRegister props={props} />;
    
}
