import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import TeacherLogin from './TeacherLogin'

export default function TeacherLoginIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <TeacherLogin props={props} />;
    
}
