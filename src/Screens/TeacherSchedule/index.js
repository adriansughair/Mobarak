import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import TeacherSchedule from './TeacherSchedule';
import Layout from '../../components/layout/Layout'

export default function ScheduleIndex({navigation}) {
    
    const props = {
        navigation: navigation
    };
    return <TeacherSchedule props={props} />;
    
}