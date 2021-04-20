import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import TeacherAccounting from './TeacherAccounting';
import Layout from '../../components/layout/Layout'

export default function AccountingIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <TeacherAccounting props={props} />;
    
}