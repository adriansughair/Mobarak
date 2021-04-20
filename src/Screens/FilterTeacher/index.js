import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import Filter from './Filter';
import Layout from '../../components/layout/Layout'

export default function FilterIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Layout><Filter props={props} /></Layout>;
    
}