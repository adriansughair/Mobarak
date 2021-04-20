import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import TeacherHistory from './TeacherHistory';
import Layout from '../../components/layout/Layout'

export default function HistoryIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <TeacherHistory props={props} />;
    
}