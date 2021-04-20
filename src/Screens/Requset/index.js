import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import Requset from './Requset'
import Layout from "../../components/layout/Layout"
export default function RequsetIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Layout><Requset props={props} /></Layout>;
    
}