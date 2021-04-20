import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import AddCard from './AddCard';
import Layout from '../../components/layout/Layout'

export default function AddCardIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Layout><AddCard props={props} /></Layout>;
    
}