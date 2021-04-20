import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import Profile from './Profile'
import Layout from "../../components/layout/Layout"

export default function ProfileIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Layout><Profile props={props} /></Layout>;
    
}
