import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import PaymantStatus from './PaymantStatus';
import Layout from '../../components/layout/Layout'

export default function PaymantStatusIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Layout><PaymantStatus props={props} /></Layout>;
    
}