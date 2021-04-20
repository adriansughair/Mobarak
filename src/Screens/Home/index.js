import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import Home from './Home';
import Layout from '../../components/layout/Layout'

export default function HomeIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Layout><Home props={props} /></Layout>;
    
}