import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import TeacherList from './TeacherList';
import Layout from '../../components/layout/Layout'

export default function ShowIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Layout><TeacherList props={props} /></Layout>;
    
}