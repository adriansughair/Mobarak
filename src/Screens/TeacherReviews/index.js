import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import Reviews from './Reviews';
import Layout from '../../components/layout/Layout'

export default function ReviewsIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <Reviews props={props} />;
    
}