import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import ShowTeacher from './ShowTeacher';
import Layout from '../../components/layout/Layout'

export default function ShowIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Layout><ShowTeacher props={props} /></Layout>;
    
}