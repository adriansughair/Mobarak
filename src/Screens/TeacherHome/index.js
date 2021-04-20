import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import TeacherHome from './TeacherHome';
import Layout from '../../components/layout/Layout'

export default function TeacherHomeIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <TeacherHome props={props} />;
    
}